# Generated by Django 5.1.4 on 2024-12-19 19:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Users', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='user_password',
            field=models.BinaryField(max_length=255, verbose_name='Contraseña'),
        ),
    ]