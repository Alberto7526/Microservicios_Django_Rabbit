from rest_framework.serializers import ModelSerializer
from Registers.models import Log, Operation

class LogSerializer(ModelSerializer):
    '''
    
    '''
    class Meta:
        model = Log
        fields = '__all__'

class OperationSerializer(ModelSerializer):
    '''
    
    '''
    class Meta:
        model = Operation
        fields = '__all__'