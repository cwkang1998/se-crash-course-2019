from django.db import models
from django.contrib.auth.models import User


class Thread(models.Model):
    owner_id = models.ForeignKey(to=User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Post(models.Model):
    user_id = models.ForeignKey(to=User, on_delete=models.CASCADE)
    thread_id = models.ForeignKey(to=Thread, on_delete=models.CASCADE)
    content = models.TextField()
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.content
