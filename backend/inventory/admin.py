from django.contrib import admin
from inventory import models


@admin.register(models.Inventory)
class InventoryAdmin(admin.ModelAdmin):
    list_display = ('brand', 'cost', 'type', 'description', 'sold', 'total_order_price', 'platform_sold_on',
                  'sold_date', 'created_date',)