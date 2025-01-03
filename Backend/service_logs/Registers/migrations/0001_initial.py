# Generated by Django 5.1.4 on 2025-01-02 14:05

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Operation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('o_code', models.CharField(blank=True, max_length=20, null=True, verbose_name='Código')),
                ('o_name', models.CharField(max_length=200, verbose_name='Nombre')),
                ('o_enable', models.BooleanField(default=True, verbose_name='Activo')),
            ],
        ),
        migrations.CreateModel(
            name='Log',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('l_date', models.DateTimeField(auto_now_add=True, verbose_name='Fecha')),
                ('l_detail', models.CharField(max_length=500, verbose_name='Detalle')),
                ('l_user_id', models.IntegerField(verbose_name='Usuario')),
                ('l_operation', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Registers.operation', verbose_name='Tipo de Operación')),
            ],
        ),
    ]