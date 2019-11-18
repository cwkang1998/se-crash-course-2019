from django.contrib.auth.models import User
from rest_framework.serializers import ModelSerializer

class RegistrationSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"

