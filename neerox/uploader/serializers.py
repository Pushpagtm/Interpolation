from .models import Product
from rest_framework import serializers
# from user.models import User

class FileUploadedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

    # def create(self, validated_data):

    #     uploaded = Product.objects.create(
    #         product_name = validated_data['product_name'],
    #         sender=self.context['request'].user
    #     )
    #     uploaded.save()