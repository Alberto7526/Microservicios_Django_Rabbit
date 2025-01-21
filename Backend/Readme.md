# Guía de Instalación y Uso de Servicios

## Instalación de Servicios Docker

A continuación se detallan los pasos para instalar y configurar los diferentes servicios. Es importante **instalar cada archivo por separado** en el orden indicado para asegurar que todos los servicios se inicien correctamente.

### Orden de Instalación
1. **db_auth**: Base de datos para autenticación.
2. **Redis**: Cache para mejorar el rendimiento.
3. **Rabbit**: Servicio de mensajería para la comunicación entre microservicios.
4. **auth**: Servicio de autenticación principal.
5. **traefik**: Proxy reverso para manejar las solicitudes HTTP y redirigirlas al servicio correspondiente.

Cada servicio tiene su propio archivo `docker-compose.yml`, lo que permite su instalación y configuración independiente.

---

## Consumir Servicio de Autenticación

Para poder generar los **tokens de autenticación** y realizar el login, es necesario seguir los siguientes pasos:

1. **Acceder a la aplicación**:
   - Ingrese con el **usuario** definido en el archivo `create_user.py`, el cual se encuentra en el servicio **auth**.

2. **Registrar una nueva aplicación**:
   - Una vez haya iniciado sesión, deberá **registrar una nueva aplicación**. Para esto, debe guardar el **ID** y la **secret key** de la aplicación antes de dar clic en guardar.
   - Asegúrese de completar el proceso y **dar clic en "Guardar"** para que la aplicación quede registrada correctamente.

---

¡Listo! Siguiendo estos pasos, podrás consumir el servicio de autenticación y generar tokens para interactuar con la plataforma de manera segura.
