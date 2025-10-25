from django.conf import settings
from django.shortcuts import render
from django.utils import timezone
from rest_framework import generics, status, filters
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import permissions
from rest_framework.exceptions import PermissionDenied

from .models import HeroSlider
from .serializers import (
    HeroSliderSerializer,
    HeroSliderListSerializer,
)


class HeroSliderListAPIView(generics.ListAPIView):
    """
    API endpoint for getting active hero sliders
    """

    serializer_class = HeroSliderListSerializer
    permission_classes = [AllowAny]
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = ["is_active"]
    ordering_fields = ["order", "created_at"]
    ordering = ["order"]

    def get_queryset(self):
        """Return only active sliders"""
        return (
            HeroSlider.objects.filter(is_active=True).select_related().order_by("order")
        )

    def list(self, request, *args, **kwargs):
        """Custom list method with metadata"""
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)

        return Response(
            {
                "success": True,
                "count": len(serializer.data),
                "results": serializer.data,
                "timestamp": timezone.now(),
            }
        )


class HeroSliderDetailAPIView(generics.RetrieveAPIView):
    """
    API endpoint for getting a single hero slider by ID
    """

    serializer_class = HeroSliderSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return HeroSlider.objects.filter(is_active=True)

    def retrieve(self, request, *args, **kwargs):
        """Custom retrieve"""
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(
            {
                "success": True,
                "data": serializer.data,
                "timestamp": timezone.now(),
            }
        )


@api_view(["GET"])
@permission_classes([AllowAny])
def api_health_check(request):
    """
    API health check endpoint
    """

    total_sliders = HeroSlider.objects.count()
    active_sliders = HeroSlider.objects.filter(is_active=True).count()

    return Response(
        {
            "success": True,
            "message": "NetFood API is running smoothly!",
            "version": "1.0.0",
            "timestamp": timezone.now(),
            "stats": {
                "total_sliders": total_sliders,
                "active_sliders": active_sliders,
            },
            "endpoints": {
                "sliders": "/api/sliders/",
                "slider_detail": "/api/sliders/{id}/",
                "health": "/api/health/",
            },
        }
    )
