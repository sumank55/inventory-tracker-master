from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    email = models.EmailField(unique=True)
    password = models.CharField(max_length=400)
    username = models.CharField(max_length=150, unique=True, blank=True)

    class Meta:
        db_table = 'users'
