from django.db import models

class Order(models.Model):

    username = models.CharField(
        max_length=200
    )

    product_name = models.CharField(
        max_length=300
    )

    total_price = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    payment_method = models.CharField(
        max_length=100
    )

    address = models.TextField()

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):

        return self.username