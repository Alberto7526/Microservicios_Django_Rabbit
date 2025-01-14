from rest_framework.serializers import ModelSerializer
from Users.models import User

class UserSerializer(ModelSerializer):
    '''
    nnnn
    '''
    class Meta:
        model = User
        fields = '__all__'
        