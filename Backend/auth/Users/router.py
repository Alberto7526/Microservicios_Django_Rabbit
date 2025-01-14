from rest_framework.routers import DefaultRouter
from Users.views import UserModelViewSet

# URL routing for records
router_users = DefaultRouter()
router_users.register("users", viewset=UserModelViewSet)