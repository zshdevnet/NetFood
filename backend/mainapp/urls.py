from django.urls import path, include
from . import views

app_name = "mainapp"

# API URL patterns
api_urlpatterns = [
    # Hero Slider endpoints
    path("sliders/", views.HeroSliderListAPIView.as_view(), name="slider-list"),
    path(
        "sliders/<int:pk>/",
        views.HeroSliderDetailAPIView.as_view(),
        name="slider-detail",
    ),
    # Health check
    path("health/", views.api_health_check, name="api-health"),
]

urlpatterns = [
    # API routes
    path("api/", include(api_urlpatterns)),
]
