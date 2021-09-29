from django.contrib.postgres.fields import ArrayField
from django.db import models
from django.utils import timezone
from model_utils.models import TimeStampedModel
from authentication.models import User


class Inventory(TimeStampedModel):
    brand = models.CharField(max_length=250, null=True, blank=True)
    cost = models.FloatField(null=True, blank=True)
    type = models.CharField(max_length=250, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    sold = models.BooleanField(default=False)
    total_order_price = models.FloatField(null=True, blank=True)
    platform_sold_on = models.CharField(max_length=250, null=True, blank=True)
    sold_date = models.DateTimeField(null=True, blank=True)
    created_date = models.DateTimeField(default=timezone.now)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

