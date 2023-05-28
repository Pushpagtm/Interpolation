from django.urls import path, include
from . views import *
from rest_framework.routers import DefaultRouter
from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register(r'uploadFile', ProductAPIView, basename='uploadFile')
router.register(r'uploadFile', ProductAPIDetail, basename='uploadFile')


urlpatterns = [
    path('upload/', include(router.urls)),
    path('upload/<int:pk>/', include(router.urls)),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)