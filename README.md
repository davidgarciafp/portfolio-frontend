# Portfolio Frontend

Este es el frontend de mi portfolio personal, construido con React, React Router y Tailwind CSS.

## Tecnologías utilizadas

- React
- React Router
- Tailwind CSS
- Fetch API para comunicación con el backend

## Estructura del proyecto

```
frontend/
├── public/             # Archivos estáticos
├── src/                # Código fuente
│   ├── components/     # Componentes reutilizables
│   │   └── layout/     # Componentes de layout (Header, Footer)
│   ├── pages/          # Páginas principales
│   ├── services/       # Servicios para comunicación con la API
│   ├── App.js          # Componente principal
│   └── index.js        # Punto de entrada
└── package.json        # Dependencias y scripts
```

## Requisitos previos

- Node.js (v14 o superior)
- npm o yarn

## Instalación

1. Clona el repositorio:
   ```
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio/frontend
   ```

2. Instala las dependencias:
   ```
   npm install
   ```

3. Crea un archivo `.env` en la raíz del proyecto con la siguiente variable:
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```

## Ejecución

Para iniciar el servidor de desarrollo:

```
npm start
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## Construcción para producción

Para crear una versión optimizada para producción:

```
npm run build
```

Los archivos se generarán en la carpeta `build/`.

## Conexión con el backend

Este frontend se comunica con un backend Node.js/Express. Asegúrate de que el backend esté en ejecución en `http://localhost:5000` o actualiza la variable `REACT_APP_API_URL` en el archivo `.env` para apuntar a la URL correcta.

## Comandos disponibles

### `npm start`

Ejecuta la aplicación en modo desarrollo.
Abre [http://localhost:3000](http://localhost:3000) para verla en el navegador.

### `npm test`

Lanza el ejecutor de pruebas en modo interactivo.

### `npm run build`

Construye la aplicación para producción en la carpeta `build`.

## Licencia

MIT
