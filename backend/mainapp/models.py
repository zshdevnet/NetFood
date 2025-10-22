from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.utils.text import slugify
from django.urls import reverse
from django.db.models.signals import post_delete
from django.dispatch import receiver
import os


class HeroSlider(models.Model):
    """
    Dynamic Hero Slider Model for NetFood Homepage
    SEO-optimized with comprehensive metadata and image management
    """

    # Basic Content Fields
    title = models.CharField(
        max_length=100, help_text="Main headline (max 100 chars for optimal SEO)"
    )
    subtitle = models.CharField(
        max_length=80, help_text="Subtitle/tagline (max 80 chars for readability)"
    )
    description = models.TextField(
        max_length=200,
        help_text="Short description (max 200 chars for meta description)",
    )

    # Image Fields
    image = models.ImageField(
        upload_to="slides/images/",
        help_text="Main product image (recommended: 800x600px)",
    )
    image_alt = models.CharField(
        max_length=125,
        blank=True,
        help_text="Alt text for accessibility and SEO (auto-filled if empty)",
    )
    image_webp = models.ImageField(
        upload_to="slides/webp/",
        blank=True,
        null=True,
        help_text="Optional WebP version for better performance (upload manually)",
    )

    # Display & Order
    is_active = models.BooleanField(
        default=True, help_text="Display this slide on website"
    )
    order = models.PositiveIntegerField(
        default=1,
        validators=[MinValueValidator(1), MaxValueValidator(100)],
        help_text="Display order (1 = first)",
    )

    # Timestamps
    created_at = models.DateTimeField(
        auto_now_add=True, help_text="When this slide was created"
    )
    updated_at = models.DateTimeField(auto_now=True, help_text="Last modification time")

    class Meta:
        verbose_name = "Hero Slider"
        verbose_name_plural = "Hero Sliders"
        ordering = ["order", "-created_at"]
        indexes = [
            models.Index(fields=["is_active", "order"]),
            models.Index(fields=["-created_at"]),
        ]

    def __str__(self):
        return f"{self.title} ({self.order})"

    def save(self, *args, **kwargs):
        """
        Override save method - no automatic image processing
        """
        # Auto-fill image alt text if empty
        if not self.image_alt:
            self.image_alt = f"{self.title} - {self.subtitle}"[:125]

        super().save(*args, **kwargs)
        # No automatic image processing - upload images as-is


@receiver(post_delete, sender=HeroSlider)
def delete_hero_slider_images(sender, instance, **kwargs):
    """
    Delete associated image files when a HeroSlider instance is deleted
    """
    # Delete main image file
    if instance.image:
        try:
            if os.path.isfile(instance.image.path):
                os.remove(instance.image.path)
                print(f"Deleted image: {instance.image.path}")
        except Exception as e:
            print(f"Error deleting image {instance.image.path}: {e}")

    # Delete WebP image file if it exists
    if instance.image_webp:
        try:
            if os.path.isfile(instance.image_webp.path):
                os.remove(instance.image_webp.path)
                print(f"Deleted WebP image: {instance.image_webp.path}")
        except Exception as e:
            print(f"Error deleting WebP image {instance.image_webp.path}: {e}")
