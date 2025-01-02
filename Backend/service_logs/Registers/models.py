from django.db import models

class Operation(models.Model):
    o_code = models.CharField('Código', max_length=20, null=True, blank=True)
    o_name = models.CharField('Nombre', max_length=200)
    o_enable = models.BooleanField('Activo', default=True)

class Log (models.Model):
    l_date = models.DateTimeField('Fecha', auto_now_add=True)
    l_operation = models.ForeignKey(
        Operation,
        on_delete=models.CASCADE,
        verbose_name='Tipo de Operación'
    )
    l_detail = models.CharField('Detalle', max_length=500)
    l_user_id = models.IntegerField('Usuario')
    
