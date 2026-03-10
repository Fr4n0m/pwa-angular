# Angular PWA - Object Detection

![Angular](https://img.shields.io/badge/Angular-19.1.x-DD0031?logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.x-3178C6?logo=typescript&logoColor=white)
![PWA](https://img.shields.io/badge/PWA-Enabled-5A0FC8?logo=pwa&logoColor=white)
![TensorFlow.js](https://img.shields.io/badge/TensorFlow.js-4.22.x-FF6F00?logo=tensorflow&logoColor=white)
![MobileNet](https://img.shields.io/badge/MobileNet-v2-FF9800)
![Angular Material](https://img.shields.io/badge/Angular%20Material-19.1.x-3F51B5?logo=angular&logoColor=white)
![Service Worker](https://img.shields.io/badge/Service%20Worker-Enabled-0F9D58)

Aplicacion web progresiva desarrollada con Angular para deteccion y clasificacion de objetos en imagenes usando TensorFlow.js (MobileNet), con capacidades offline.

## 🌐 Navegacion rapida / Quick Navigation

- [Version en Espanol](#-version-en-espanol)
- [English Version](#-english-version)

---

## 🇪🇸 Version en Espanol

### 🧭 Descripcion

Esta aplicacion permite cargar una imagen y obtener predicciones de objetos directamente en el navegador. El procesamiento se ejecuta en cliente, sin enviar imagenes a servidores externos para inferencia.

### ✨ Caracteristicas

- 🤖 Clasificacion de imagenes con TensorFlow.js + MobileNet.
- 📱 Soporte PWA instalable y funcionamiento offline.
- ⚡ Predicciones aceleradas por GPU mediante WebGL.
- 🔄 Notificaciones de actualizacion cuando hay nueva version.
- 🎨 Interfaz responsiva con Angular Material.

### 🛠️ Stack tecnologico

- Angular 19
- TypeScript 5
- Angular Material
- Angular Service Worker
- TensorFlow.js + MobileNet
- SCSS + ESLint

### 📋 Requisitos

- Node.js 18+
- npm
- Angular CLI (opcional, recomendado)

### 🚀 Instalacion

```bash
git clone https://github.com/Fr4n0m/pwa-angular.git
cd pwa-angular
npm install
```

### 💻 Desarrollo local

```bash
npm start
```

Aplicacion disponible en `http://localhost:4200`.

### 🏗️ Build de produccion

```bash
npm run build
```

Salida del build: `dist/pwa-angular/`.

### 🌍 Probar modo PWA (offline)

```bash
npm run build
npx http-server -p 8080 -c-1 dist/pwa-angular/browser
```

Abrir `http://localhost:8080`.

### 🧪 Calidad y testing

```bash
npm test
npm run lint
```

### 📜 Scripts principales

| Script | Descripcion |
| --- | --- |
| `npm start` | Servidor de desarrollo |
| `npm run build` | Build de produccion |
| `npm run watch` | Build en modo watch |
| `npm test` | Tests unitarios |
| `npm run lint` | Linter |

### 🤝 Contribuciones

Las contribuciones son bienvenidas y los PRs son la mejor via para proponer mejoras.

1. Haz fork del repositorio.
2. Crea una rama: `git checkout -b feature/nombre-cambio`.
3. Realiza commits claros y pequeños.
4. Ejecuta `npm run lint` y `npm test`.
5. Abre un Pull Request con una descripcion concreta del cambio.

Si detectas un bug o quieres proponer una mejora, abre un Issue primero y lo revisamos.

---

## 🇬🇧 English Version

### 🧭 Overview

This Progressive Web App lets users upload an image and get object classification predictions directly in the browser using TensorFlow.js (MobileNet). Inference runs client-side.

### ✨ Features

- 🤖 Image classification with TensorFlow.js + MobileNet.
- 📱 Installable PWA with offline support.
- ⚡ GPU-accelerated predictions via WebGL.
- 🔄 Update notifications when a new version is available.
- 🎨 Responsive UI with Angular Material.

### 🛠️ Tech stack

- Angular 19
- TypeScript 5
- Angular Material
- Angular Service Worker
- TensorFlow.js + MobileNet
- SCSS + ESLint

### 📋 Requirements

- Node.js 18+
- npm
- Angular CLI (optional, recommended)

### 🚀 Installation

```bash
git clone https://github.com/Fr4n0m/pwa-angular.git
cd pwa-angular
npm install
```

### 💻 Local development

```bash
npm start
```

App runs at `http://localhost:4200`.

### 🏗️ Production build

```bash
npm run build
```

Build output: `dist/pwa-angular/`.

### 🌍 Test PWA mode (offline)

```bash
npm run build
npx http-server -p 8080 -c-1 dist/pwa-angular/browser
```

Open `http://localhost:8080`.

### 🧪 Quality and testing

```bash
npm test
npm run lint
```

### 📜 Main scripts

| Script | Description |
| --- | --- |
| `npm start` | Start dev server |
| `npm run build` | Production build |
| `npm run watch` | Watch build |
| `npm test` | Unit tests |
| `npm run lint` | Lint code |

### 🤝 Contributions

Contributions are welcome, and Pull Requests are the preferred way to propose improvements.

1. Fork the repository.
2. Create a branch: `git checkout -b feature/your-change`.
3. Keep commits clear and focused.
4. Run `npm run lint` and `npm test`.
5. Open a PR with a concise explanation of the change.

If you find a bug or want to discuss an enhancement, please open an Issue first.
