from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from .views import Registration

urlpatterns = [
    path("login/", obtain_auth_token),
    path("register/", Registration.as_view())
]

