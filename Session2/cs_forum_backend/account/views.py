from django.contrib.auth.models import User
from rest_framework.generics import CreateAPIView
from .serializers import RegistrationSerializer


class Registration(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegistrationSerializer
