from django.urls import path
from .views import (
    ThreadListCreateView,
    ThreadRetrievedUpdateDestroyView,
    PostListCreateView,
    PostRetrievedUpdateDestroyView,
)

urlpatterns = [
    path("", ThreadListCreateView.as_view()),
    path("<int:pk>/", ThreadRetrievedUpdateDestroyView.as_view()),
    path("post/", PostListCreateView.as_view()),
    path("post/<int:pk>/", PostRetrievedUpdateDestroyView.as_view()),
]
