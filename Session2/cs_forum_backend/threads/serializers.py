from rest_framework.serializers import ModelSerializer, StringRelatedField
from .models import Thread, Post


class ThreadSerializer(ModelSerializer):
    owner_name = StringRelatedField(source="owner_id", read_only=True)

    class Meta:
        model = Thread
        fields = ["id", "title", "content", "owner_id", "owner_name", "created_at"]
        read_only_fields = ["owner_id", "created_at"]


class PostSerializer(ModelSerializer):
    username = StringRelatedField(source="user_id", read_only=True)

    class Meta:
        model = Post
        fields = ["id", "thread_id", "content", "username", "user_id", "updated_at"]
        read_only_fields = ["user_id", "updated_at"]
