from django.urls import path, include
from rest_framework.routers import DefaultRouter
from inventory import views


router = DefaultRouter()
router.register('entry', views.InventoryView, basename='inventory')

urlpatterns = [
    path('', include(router.urls)),
]
