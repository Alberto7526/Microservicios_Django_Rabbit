from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('El email es obligatorio')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        email = self.normalize_email(email)
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(email, password, **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField('Correo electrónico', unique=True)
    user_name = models.CharField('Nombre', max_length=255)
    user_last_name = models.CharField('Apellidos', max_length=255)
    user_phone = models.CharField('Teléfono', max_length=50, blank=True, null=True)
    user_address = models.CharField('Dirección', max_length=255, blank=True, null=True)
    user_enable = models.BooleanField('Activo', default=True)
    user_lock = models.BooleanField('Bloqueado', default=False)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)  # Necesario para la administración de Django
    is_superuser = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'  # Usamos el correo como campo de autenticación principal
    REQUIRED_FIELDS = []  # Se requiere el nombre de usuario al crear un usuario

    def __str__(self):
        return f"{self.user_name} {self.user_last_name}"

