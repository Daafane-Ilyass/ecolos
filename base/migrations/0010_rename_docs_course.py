# Generated by Django 4.2.5 on 2023-10-01 05:42

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('base', '0009_docs'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Docs',
            new_name='Course',
        ),
    ]
