from rest_framework import serializers
from .models import Inventory


class InventorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Inventory
        fields = ('id', 'brand', 'cost', 'type', 'description', 'sold', 'total_order_price', 'platform_sold_on',
                  'sold_date', 'created_date',)
