from django.db import models
from django.contrib.auth.models import AbstractUser

class User (AbstractUser):
    user_name = models.CharField('Nombre', max_length = 255)
    user_last_name = models.CharField('Apellidos', max_length=255)
    user_phone = models.CharField('Telefono', max_length=50, blank= True, null=True)
    user_address = models.CharField('Dirección', max_length=255, blank=True, null=True)
    user_enable = models.BooleanField('Activo', default=True)
    user_lock = models.BooleanField('Bloqueado', default=False)

    def __str__(self):
        return self.name+' '+self.user_last_name
