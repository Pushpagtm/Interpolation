from .serializers import RegistrationSerializer, VerifyOTPSerializer, MyTokenObtainPairSerializer
from rest_framework import generics,status
from rest_framework.views import APIView
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from user.emails import *
from user.models import User
from rest_framework_simplejwt.views import TokenObtainPairView
from .renderers import UserRenderer
from rest_framework.permissions import IsAuthenticated
from .serializers import *
from rest_framework.response import Response
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token



class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
    throttle_scope = 'login'

class RegistrationAPIView(generics.GenericAPIView):
    '''Registers user'''
    serializer_class = RegistrationSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        data = {}
        if serializer.is_valid(raise_exception=True):
            user = serializer.save()
            send_otp(serializer.data['email'])
            data['response'] = "Registration Successful!"
            refresh = RefreshToken.for_user(user=user)
            data['refresh'] = str(refresh)
            data['access'] = str(refresh.access_token)

        return Response(data, status.HTTP_201_CREATED)

class VerifyOTPAPIView(generics.GenericAPIView):
    def post(self, request, *args, **kwargs):
        serializer = VerifyOTPSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            email = serializer.data['email']
            otp = serializer.data['otp']
            user_obj = User.objects.get(email=email)
            
            if user_obj.otp == otp:
                user_obj.is_staff = True
                user_obj.save()
                return Response("verified")
            return Response(serializer.data,status.HTTP_400_BAD_REQUEST)


class LogoutBlacklistTokenUpdateView(APIView):
    permission_classes = [permissions.AllowAny]
    authentication_classes = ()

    def post(self, request):
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            
            return Response(status=status.HTTP_400_BAD_REQUEST)


class UserProfileView(APIView):
    renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]
    def get(self, request, format=None):
        serializer = UserProfileSerializer(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)


class UserChangePasswordView(APIView):
    renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]
    def post(self, request, format=None):
        serialzer = UserChangePasswordSerializer(data=request.data, context={'user':request.user})
        serialzer.is_valid(raise_exception=True)
        return Response({'msg':'Password changed successfully!'}, status=status.HTTP_200_OK)
        # return Response(serialzer.errors, status=status.HTTP_400_BAD_REQUEST)


class SendResetPasswordEmailView(APIView):
    renderer_classes = [UserRenderer]
    def post(self, request, format=None):
        serializer = ResetPasswordEmailRequestSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response({'msg':'Password Reset link has been sent to your email.'}, status=status.HTTP_200_OK)


class MyObtainToken(ObtainAuthToken):
   """Return User Info along with token"""
   def post(self, request, *arg, **kwarg):
       serializer = self.serializer_class(request.data, context={'request':request})
       serializer.is_valid(raise_exception=True)
       user = serializer.valided_data['user']
       token, _ = Token.objects.get_or_create(user)
       return Response(
            {
                 'token': token.key,
                 'username': user.username,
                 'userid': user.pk
            })
