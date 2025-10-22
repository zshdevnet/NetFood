from django.contrib import admin
from django.utils.html import format_html
from django.utils import timezone
from .models import HeroSlider


@admin.register(HeroSlider)
class HeroSliderAdmin(admin.ModelAdmin):
    """
    Beautiful, feature-rich admin interface for Hero Sliders
    """

    # List Display
    list_display = [
        "title",
        "order",
        "is_active",
        "created_at",
        "image_preview",
    ]

    # Filters
    list_filter = ["is_active", "created_at", "order"]

    # Search
    search_fields = ["title", "subtitle", "description", "image_alt"]

    # Ordering
    ordering = ["order", "-created_at"]

    # List per page
    list_per_page = 20

    # Editable fields in list view
    list_editable = ["order", "is_active"]

    # Fieldsets for organized form
    fieldsets = (
        (
            "📝 Content",
            {
                "fields": (
                    "title",
                    "subtitle",
                    "description",
                ),
                "description": "Main slide content visible to users",
            },
        ),
        (
            "🖼️ Media",
            {
                "fields": (
                    "image",
                    "image_alt",
                    "image_webp",
                ),
                "description": "Upload images and set alt text for accessibility",
            },
        ),
        (
            "� Display & Order",
            {
                "fields": (
                    "is_active",
                    "order",
                ),
                "description": "Control slide visibility and ordering",
            },
        ),
    )

    # Read-only fields
    readonly_fields = [
        "image_webp",
        "created_at",
        "updated_at",
    ]

    # Remove prepopulated fields since slug is deleted

    def image_preview(self, obj):
        """Display image thumbnail in admin list"""
        if obj.image:
            return format_html(
                '<img src="{}" style="width: 60px; height: 45px; object-fit: cover; border-radius: 4px;" />',
                obj.image.url,
            )
        return "No Image"

    image_preview.short_description = "Preview"

    def get_queryset(self, request):
        """Optimize database queries"""
        return super().get_queryset(request).select_related()

    # Custom actions
    actions = ["activate_slides", "deactivate_slides"]

    def activate_slides(self, request, queryset):
        """Bulk activate slides"""
        updated = queryset.update(is_active=True)
        self.message_user(request, f"{updated} slide(s) were successfully activated.")

    activate_slides.short_description = "Activate selected slides"

    def deactivate_slides(self, request, queryset):
        """Bulk deactivate slides"""
        updated = queryset.update(is_active=False)
        self.message_user(request, f"{updated} slide(s) were successfully deactivated.")

    deactivate_slides.short_description = "Deactivate selected slides"
