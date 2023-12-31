# Generated by Django 4.2.5 on 2023-10-09 00:39

import cloudinary.models
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0016_alter_product_image_alter_teammember_profileimageurl'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='teammember',
            name='profileImageURL',
        ),
        migrations.AddField(
            model_name='teammember',
            name='profileImage',
            field=cloudinary.models.CloudinaryField(default=True, max_length=255, verbose_name='image'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='product',
            name='image',
            field=cloudinary.models.CloudinaryField(max_length=255, verbose_name='image'),
        ),
    ]
