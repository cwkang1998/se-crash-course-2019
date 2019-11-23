from rest_framework.routers import SimpleRouter
from .views import ThreadViewSet, PostViewSet

router = SimpleRouter()
router.register("thread", ThreadViewSet, base_name="thread")
router.register("post", PostViewSet, base_name="post")
urlpatterns = router.urls
