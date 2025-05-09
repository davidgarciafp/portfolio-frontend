# Guía de despliegue del Frontend en Dokku

Esta guía explica cómo desplegar tu aplicación frontend en Dokku.

## Requisitos previos

1. Dokku instalado en tu servidor
2. Git instalado en tu máquina local
3. Acceso SSH al servidor Dokku

## Pasos para el despliegue

### 1. Crear la aplicación en Dokku

Conéctate a tu servidor mediante SSH y crea una nueva aplicación:

```bash
dokku apps:create portfolio-frontend
```

### 2. Configurar variables de entorno (opcional)

Si tu aplicación frontend necesita variables de entorno adicionales:

```bash
dokku config:set portfolio-frontend VARIABLE_NOMBRE=valor
```

### 3. Configurar el dominio (opcional)

Si quieres usar un dominio personalizado:

```bash
dokku domains:add portfolio-frontend tu-dominio.com
```

### 4. Configurar Git para el despliegue

En tu máquina local, dentro del directorio de tu proyecto frontend:

```bash
# Inicializar Git si aún no lo has hecho
git init

# Añadir todos los archivos
git add .

# Hacer commit
git commit -m "Preparación para despliegue en Dokku"

# Añadir el remoto de Dokku
git remote add dokku dokku@tu-servidor:portfolio-frontend

# Desplegar
git push dokku main
```

### 5. Verificar el despliegue

Una vez completado el despliegue, puedes verificar la URL:

```bash
dokku url portfolio-frontend
```

## Solución de problemas

### Logs

Si encuentras problemas durante el despliegue, puedes revisar los logs:

```bash
dokku logs portfolio-frontend -t
```

### Reiniciar la aplicación

Si necesitas reiniciar la aplicación:

```bash
dokku ps:restart portfolio-frontend
```

### Verificar el estado

Para ver el estado actual de tu aplicación:

```bash
dokku ps:report portfolio-frontend
```

## Actualizar la aplicación

Para actualizar tu aplicación, simplemente haz commit de tus cambios y vuelve a hacer push al remoto de Dokku:

```bash
git add .
git commit -m "Actualización de la aplicación"
git push dokku main
```