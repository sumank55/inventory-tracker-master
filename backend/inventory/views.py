from rest_framework.viewsets import ModelViewSet
from django.utils import timezone
from .models import Inventory
from .serializers import InventorySerializer


class InventoryView(ModelViewSet):
    def get_queryset(self):
        queryset = Inventory.objects.filter(user=self.request.user)
        return queryset

    serializer_class = InventorySerializer

    def perform_create(self, serializer):
        now = timezone.now()
        if self.request.data['sold']:
            return serializer.save(user=self.request.user, sold_date=now)
        else:
            return serializer.save(user=self.request.user)

    def perform_update(self, serializer):
        now = timezone.now()
        inventory = self.get_object()
        if self.request.data['sold'] and not inventory.sold:
            return serializer.save(user=self.request.user, sold_date=now)
        else:
            return serializer.save()