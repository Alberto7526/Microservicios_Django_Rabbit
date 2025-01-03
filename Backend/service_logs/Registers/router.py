from rest_framework.routers import DefaultRouter
from Registers.views import LogModelViewSet, OperationModelViewSet

router_logs = DefaultRouter()
router_logs.register("logs", viewset=LogModelViewSet)

router_operations = DefaultRouter()
router_operations.register("operations", viewset=OperationModelViewSet)