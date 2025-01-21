from Users.models import User
from django.core.exceptions import ObjectDoesNotExist

try:
    user = User.objects.get(email= "desarrollo.software@robotica.com.co")
except ObjectDoesNotExist:
    user = User(
        email="desarrollo.software@robotica.com.co", 
        user_name="Desarrollo", 
        user_last_name="Usuario", 
        user_enable=True, 
        user_lock=False, 
        is_staff=True,
        is_superuser=True
        )
    user.set_password("1234*")
    user.save()
