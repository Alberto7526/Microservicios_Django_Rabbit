from rest_framework.viewsets import ModelViewSet
from Registers.serializers import LogSerializer, OperationSerializer
from Registers.models import Log, Operation

class LogModelViewSet(ModelViewSet):
    '''
    
    '''
    serializer_class = LogSerializer
    queryset = Log.objects.all()

class OperationModelViewSet(ModelViewSet):
    '''
    
    '''
    serializer_class = OperationSerializer
    queryset = Operation.objects.all()
    