from django.urls import path
from .views import RegistrationAPIView, VerifyOTPAPIView, LogoutBlacklistTokenUpdateView, MyTokenObtainPairView, UserProfileView, UserChangePasswordView, SendResetPasswordEmailView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('verify/', VerifyOTPAPIView.as_view(), name='verify-otp'),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('obtain-token/', TokenObtainPairView.as_view(), name='token_obtain'),
    path('logout/', LogoutBlacklistTokenUpdateView.as_view(), name='logout'),
    path('register/', RegistrationAPIView.as_view(), name='registration'),
    path('profile/', UserProfileView.as_view(), name='profile'),
    path('changepassword/', UserChangePasswordView.as_view(), name='changepassword'),
    path('send_reset_password_email/', SendResetPasswordEmailView.as_view(), name='password-reset-confirm'),
]