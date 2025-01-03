from Users.models import User
from django.core.exceptions import ObjectDoesNotExist

try:
    user = User.objects.get(username="desarrollo")
except ObjectDoesNotExist:
    user = User(username="desarrollo", email="desarrollo.software@robotica.com.co", user_name="Desarrollo", user_last_name="Usuario", user_enable=True, user_lock=False, is_staff=True)
    user.set_password("Des4rr0ll0*")
    user.save()
