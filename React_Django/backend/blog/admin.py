from django.contrib import admin
from .models import BlogModel

# registering the blog model for the admin page
class BlogAdmin(admin.ModelAdmin):
    # overriding the list display in django/admin
    list_display = ('title', 'body', 'date_posted')

# registering the model(s)
admin.site.register(BlogModel, BlogAdmin)