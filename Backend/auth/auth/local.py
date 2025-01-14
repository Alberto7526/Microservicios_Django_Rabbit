from .base import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = [
    'localhost',
    'auth.ingeprueba.localhost',
    'ingeprueba.localhost'
]

CSRF_TRUSTED_ORIGINS = [
    'https://auth.ingeprueba.localhost',
    'http://auth.ingeprueba.localhost',  # si también usas HTTP
]


STATIC_URL = 'static/'


# Database
# https://docs.djangoproject.com/en/5.1/ref/settings/#databases

DATABASES = {
    'default': env.db(),  # Esto usa la variable DATABASE_URL
}

CORS_ORIGIN_ALLOW_ALL = True
