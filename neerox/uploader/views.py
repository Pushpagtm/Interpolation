from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import authentication, permissions
from django.contrib.auth.models import User
from .models import Product
from .serializers import FileUploadedSerializer
from rest_framework.permissions import IsAuthenticated
from user.renderers import UserRenderer



class ProductAPIView(ModelViewSet):
    renderer_classes = [UserRenderer]
    permission_classes = [permissions.AllowAny]
    # permission_classes = [IsAuthenticated]
    serializer_class = FileUploadedSerializer
    queryset = Product.objects.all()

class ProductAPIDetail(ModelViewSet):
    renderer_classes = [UserRenderer]
    permission_classes = [permissions.AllowAny]
    # permission_classes = [IsAuthenticated]
    serializer_class = FileUploadedSerializer
    queryset = Product.objects.all()


