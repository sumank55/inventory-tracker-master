from django.contrib import admin
from authentication.models import User


class UserAdmin(admin.ModelAdmin):
    model = User
    list_display = ['id', 'email',  'username']
    search_fields=('email','username')


admin.site.register(User, UserAdmin)
