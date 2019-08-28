# serializer to allow data transfer to the data to the front end
from rest_framework import serializers

# grabbing the models you want
from .models import BlogModel

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogModel
        fields = ('id','title', 
        'body', 'image', 'date_posted', 
        'date_original_posted')

