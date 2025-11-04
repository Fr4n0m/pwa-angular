# 🔍 Angular PWA - Object Detection

Una Progressive Web Application moderna construida con Angular 19 que utiliza inteligencia artificial para detectar y clasificar objetos en imágenes en tiempo real, con capacidades offline completas.

## ✨ Características Principales

- 🤖 **Detección de Objetos con IA**: Utiliza TensorFlow.js con el modelo MobileNet V2 para clasificar imágenes
- 📱 **Progressive Web App**: Funcionalidad offline completa con Service Workers
- 🎨 **Material Design**: Interfaz moderna y responsiva con Angular Material (tema Rose-Red)
- ⚡ **Alto Rendimiento**: Backend WebGL para aceleración de GPU en las predicciones
- 🔄 **Actualizaciones Automáticas**: Sistema de notificaciones para nuevas versiones de la app
- 📷 **Carga de Imágenes**: Sube y analiza imágenes directamente desde tu dispositivo
- 🌐 **Offline First**: La app funciona completamente sin conexión una vez instalada

## 🛠️ Tecnologías Utilizadas

- **Framework**: Angular 19.1.5
- **UI Library**: Angular Material 19.1.3
- **PWA**: Angular Service Worker
- **IA/ML**: TensorFlow.js 4.22.0 + MobileNet 2.1.1
- **Lenguaje**: TypeScript 5.7.3
- **Estilos**: SCSS
- **Linting**: ESLint con Angular ESLint

## 📋 Requisitos Previos

- Node.js (v18 o superior recomendado)
- npm o yarn
- Angular CLI

## 🚀 Instalación

1. Clona el repositorio:
```bash
git clone <tu-repositorio>
cd pwa-angular
```

2. Instala las dependencias:
```bash
npm install
```

## 💻 Uso en Desarrollo

### Servidor de Desarrollo

Ejecuta el servidor de desarrollo:

```bash
npm start
# o
ng serve
```

Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si modificas algún archivo fuente.

> ⚠️ **Nota**: El Service Worker no está activo en modo desarrollo, solo en producción.

## 🏗️ Construcción para Producción

Para compilar el proyecto:

```bash
npm run build
# o
ng build
```

Los artefactos de construcción se almacenarán en el directorio `dist/pwa-angular/`.

### Build Optimizado

El build de producción incluye:
- Optimización y minificación de código
- Tree-shaking para reducir el tamaño del bundle
- Service Worker habilitado para funcionalidad PWA
- Precarga del modelo MobileNet para uso offline

## 🌐 Probar la PWA Localmente

Para probar todas las funcionalidades PWA (Service Worker, modo offline, etc.):

1. **Construye el proyecto para producción**:
```bash
ng build
```

2. **Instala http-server** (si no lo tienes):
```bash
npm install -g http-server
```

3. **Sirve los archivos compilados**:
```bash
http-server -p 8080 -c-1 dist/pwa-angular/browser
```

4. **Accede a la aplicación**:
   - Abre tu navegador en `http://localhost:8080`
   - El Service Worker solo funcionará en producción y sobre HTTPS o localhost

5. **Instala la PWA**:
   - En Chrome/Edge, busca el ícono de instalación en la barra de direcciones
   - Acepta instalar la aplicación
   - La app ahora funcionará offline y tendrá su propio ícono en tu sistema

## 🧪 Testing

### Ejecutar Tests Unitarios

```bash
npm test
# o
ng test
```

Esto ejecutará los tests usando Karma.

### Linting

```bash
npm run lint
# o
ng lint
```

## 📁 Estructura del Proyecto

```
pwa-angular/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── shared/          # Componentes compartidos (header, check-update)
│   │   ├── pages/
│   │   │   └── object-detection/ # Módulo principal de detección
│   │   │       ├── models/       # Interfaces y tipos
│   │   │       ├── prediction-list/  # Componente de listado de predicciones
│   │   │       ├── upload-card/      # Componente de carga de imágenes
│   │   │       ├── object-detection.component.ts
│   │   │       └── object-detection.service.ts
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── styles.scss              # Estilos globales
│   └── index.html
├── public/                       # Recursos estáticos (favicon, manifest, etc.)
├── ngsw-config.json             # Configuración del Service Worker
├── angular.json                 # Configuración de Angular
├── package.json
└── README.md
```

## 🔧 Configuración PWA

La aplicación está configurada para funcionar offline mediante:

- **Service Worker**: Cachea automáticamente los recursos de la aplicación
- **Manifest**: Define cómo se ve la app cuando se instala
- **Estrategias de Caché**:
  - `prefetch`: App shell y recursos críticos
  - `lazy`: Assets como imágenes
  - Modelo MobileNet precargado para uso offline

## 🤖 Cómo Funciona la Detección de Objetos

1. El usuario carga una imagen desde su dispositivo
2. La imagen se pasa al modelo MobileNet V2 precargado
3. El modelo realiza la clasificación usando aceleración GPU (WebGL)
4. Se muestran las predicciones con su nivel de confianza
5. Todo el proceso ocurre en el navegador, sin enviar datos a servidores externos

### Modelo de IA

- **Modelo**: MobileNet V2 (versión 2, alpha 1.0)
- **Fuente**: TensorFlow Hub
- **Capacidades**: Clasificación de ~1000 categorías de objetos
- **Rendimiento**: Optimizado para ejecución en navegadores

## 🎨 Temas y Estilos

- Tema principal: Rose-Red de Angular Material
- Estilos personalizados en SCSS
- Diseño responsivo para todos los dispositivos

## 📱 Compatibilidad

La aplicación es compatible con:
- Chrome/Edge (recomendado)
- Firefox
- Safari
- Navegadores móviles modernos

## 🔄 Actualizaciones

La app incluye un componente que notifica automáticamente cuando hay una nueva versión disponible, permitiendo al usuario actualizar con un solo clic.

## 📝 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm start` | Inicia el servidor de desarrollo |
| `npm run build` | Compila la aplicación para producción |
| `npm test` | Ejecuta los tests unitarios |
| `npm run lint` | Ejecuta el linter de código |
| `npm run watch` | Compila en modo watch para desarrollo |

## 🐛 Solución de Problemas

### El Service Worker no funciona
- Asegúrate de estar en modo producción (`ng build`)
- Verifica que estés usando HTTPS o localhost
- Limpia el caché del navegador

### El modelo no carga
- Verifica tu conexión a internet la primera vez
- Una vez cargado, el modelo se cachea para uso offline
- Revisa la consola del navegador para errores

### La aplicación es lenta
- El primer uso requiere descargar el modelo (~5-10 MB)
- Usos posteriores son mucho más rápidos gracias al caché
- Asegúrate de tener WebGL habilitado en tu navegador

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es privado.

## 👨‍💻 Autor

Proyecto desarrollado como demostración de capacidades PWA con Angular e Inteligencia Artificial.

---

**¿Tienes preguntas o sugerencias?** No dudes en abrir un issue o contactar al equipo de desarrollo.
