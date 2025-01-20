# users/authentication.py

from django.contrib.auth import get_user_model
from oauth2_provider.backends import OAuth2Backend

class EmailOAuth2Backend(OAuth2Backend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        # Usamos el email en lugar de username para autenticar
        try:
            user = get_user_model().objects.get(email=username)
            if user.check_password(password):
                return user
        except get_user_model().DoesNotExist:
            return None
