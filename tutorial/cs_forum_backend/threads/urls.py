from django.urls import path
from .views import (
    ThreadListCreateView,
    ThreadRetrievedUpdateDestroyView,
    PostListCreateView,
    PostRetrievedUpdateDestroyView,
)

urlpatterns = [
    path("", ThreadListCreateView.as_view()),
    path("<int:id>/", ThreadRetrievedUpdateDestroyView.as_view()),
    path("post/", PostListCreateView.as_view()),
    path("post/<int:id>/", PostRetrievedUpdateDestroyView.as_view()),
]
