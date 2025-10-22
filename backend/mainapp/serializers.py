from rest_framework import serializers
from .models import HeroSlider


class HeroSliderSerializer(serializers.ModelSerializer):
    """
    Serializer for Hero Slider API responses
    Optimized for frontend consumption with computed fields
    """

    # Computed fields for frontend
    image_url = serializers.SerializerMethodField()
    webp_url = serializers.SerializerMethodField()

    class Meta:
        model = HeroSlider
        fields = [
            # Basic content
            "id",
            "title",
            "subtitle",
            "description",
            # Images
            "image_url",
            "webp_url",
            "image_alt",
            # Display
            "is_active",
            "order",
            # Timestamps
            "created_at",
            "updated_at",
        ]
        read_only_fields = [
            "id",
            "created_at",
            "updated_at",
        ]

    def get_image_url(self, obj):
        """Get full URL for image"""
        if obj.image:
            request = self.context.get("request")
            if request:
                return request.build_absolute_uri(obj.image.url)
            return obj.image.url
        return None

    def get_webp_url(self, obj):
        """Get full URL for WebP image"""
        if obj.image_webp:
            request = self.context.get("request")
            if request:
                return request.build_absolute_uri(obj.image_webp.url)
            return obj.image_webp.url
        return None


class HeroSliderListSerializer(serializers.ModelSerializer):
    """
    Lightweight serializer for listing hero sliders
    Optimized for performance with minimal fields
    """

    image_url = serializers.SerializerMethodField()
    webp_url = serializers.SerializerMethodField()

    class Meta:
        model = HeroSlider
        fields = [
            "id",
            "title",
            "subtitle",
            "description",
            "image_url",
            "webp_url",
            "image_alt",
            "order",
            "is_active",
        ]

    def get_image_url(self, obj):
        """Get full URL for image"""
        if obj.image:
            request = self.context.get("request")
            if request:
                return request.build_absolute_uri(obj.image.url)
            return obj.image.url
        return None

    def get_webp_url(self, obj):
        """Get full URL for WebP image"""
        if obj.image_webp:
            request = self.context.get("request")
            if request:
                return request.build_absolute_uri(obj.image_webp.url)
            return obj.image_webp.url
        return None


# Remove all analytics and interaction serializers since those sections are deleted
