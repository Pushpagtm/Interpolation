from django.db import models
from django.utils.translation import gettext_lazy as _
from user.models import User

# Create your models here.
class TimeStamp(models.Model):
    """General Abstract model that can inherited by other model which requires timestamp"""

    created_at = models.DateTimeField(
        _("Created Date"),
        auto_now_add=True,
        help_text=_("Eg. 2021-09-28T19:40:02.785988+05:45"),
    )
    updated_at = models.DateTimeField(
        _("Updated Date"),
        auto_now=True,
        help_text=_("Eg. 2021-09-28T19:40:02.785988+05:45"),
    )

    class Meta:
        abstract = True


class Product(TimeStamp):
    product_name = models.CharField(max_length=500)
    sku = models.CharField(max_length=100)
    product_code = models.CharField(max_length=100)
    category = models.CharField(max_length=200)
    description = models.CharField(max_length=255, blank=True)
    price = models.DecimalField(decimal_places=3, max_digits=20,null=True)
    uploaded_file = models.FileField(upload_to ='file_upload/file/%Y/%m/%d/', null=True)  
    video_image = models.ImageField(upload_to='images/product_image')
    sizes = models.CharField(max_length=50)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.product_name
    
    # def __str__(self) -> str:
    #     return self.user
    
