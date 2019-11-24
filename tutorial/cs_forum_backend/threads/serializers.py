from rest_framework.serializers import ModelSerializer
from .models import Thread, Post


class ThreadSerializer(ModelSerializer):
    class Meta:
        model = Thread
        fields = "__all__"
        read_only_fields = ["owner_id", "created_at"]


class PostSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = "__all__"
        read_only_fields = ["owner_id", "updated_at"]
