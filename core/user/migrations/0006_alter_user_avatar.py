# Generated by Django 4.2.5 on 2023-09-22 05:35

import core.user.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core_user', '0005_rename_post_liked_user_posts_liked'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='avatar',
            field=models.ImageField(blank=True, null=True, upload_to=core.user.models.user_directory_path),
        ),
    ]