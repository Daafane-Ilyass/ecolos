# Generated by Django 4.2.5 on 2023-10-09 00:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0015_remove_teammember_profileimage_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
        migrations.AlterField(
            model_name='teammember',
            name='profileImageURL',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]
