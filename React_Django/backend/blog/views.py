from django.shortcuts import render

# basic viewset from DRF
from rest_framework import viewsets
from .serializers import BlogSerializer
from .models import BlogModel

class BlogView(viewsets.ModelViewSet):
    # overriding the default serializer with our 'custom' one
    serializer_class = BlogSerializer
    queryset = BlogModel.objects.all() # grabbing all of the model
