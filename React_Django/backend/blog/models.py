from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
# from django.urls import reverse (only seems to be used for simple html/css/js sites)
# being able to customize how the backend looks:
from django.contrib import admin


# needed to resize the image
from PIL import Image

# Create your models here.
class BlogModel(models.Model):
    title = models.CharField(max_length=200)
    body = models.TextField()
    image = models.ImageField(default="default.jpg", upload_to="blogImagesUploads")
 
    # date that can be updated
    date_posted = models.DateTimeField(default=timezone.now)
    # this will update the time, every time a post is updated
    last_modified = models.DateTimeField(auto_now=True)
    # sets the datetime only to when the post is originally created,
    # you can never update the date posted argument
    date_original_posted = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.title


    # saving the image
    # play around with how big you want the images, ect
    # depending on what you need
    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

        img = Image.open(self.image.path)

        if img.height > 800 or img.width > 800:
            output_size = (800, 800)
            img.thumbnail(output_size)
            img.save(self.image.path)