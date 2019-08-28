# interesting, this is new to me


from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from blog import views
# for handing images locally (look into AWS for other options)
from django.conf import settings
from django.conf.urls.static import static

# using the DRF router
# this could be refactored, to something else, look on github for that
router = routers.DefaultRouter()
router.register(r'blog', views.BlogView, 'blog')

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # added api, grabbing router from DRF
    path('api/', include(router.urls))
]





# this is needed for hosting the images locally
# (before you do `python manage.py collectstatic`)
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)