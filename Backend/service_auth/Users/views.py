from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import AllowAny
from Users.serializers import UserSerializer
from Users.models import User
from Users.tasks import *


class UserModelViewSet(ModelViewSet):
    '''
    
    '''
    serializer_class = UserSerializer
    queryset = User.objects.all()
    #permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        name = request.data.get('user_name')
        last_name = request.data.get('user_last_name')
        full_name = name+' '+last_name
        email = request.data.get('user_email')

        #cook_pizza.apply_async((email, customer), countdown=5)
        bill.apply_async(args=(email, full_name), countdown=5)

        return super().create(request, *args, **kwargs)