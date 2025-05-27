# Extension List Web App

Esta es una aplicación web construida con Next.js y Tailwind CSS que muestra una lista de extensiones de navegador, simulando un marketplace visual y funcional.

## Características principales

- **Listado de extensiones**: Visualiza tarjetas de extensiones con nombre, descripción e ícono.
- **Filtrado**: Filtra las extensiones por estado: All, Active, Inactive.
- **Interactividad**: Cambia el estado de cada extensión (activa/inactiva) usando un switch en la tarjeta.
- **Tema oscuro**: Interfaz moderna y oscura por defecto.
- **Responsive**: El diseño es completamente adaptable a dispositivos móviles, tablets y escritorio.
- **Fuente personalizada**: Usa la fuente Noto Sans en toda la aplicación.

## Tecnologías usadas

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## Estructura principal

- `src/app/page.tsx`: Página principal con el grid y los filtros.
- `src/components/extension.tsx`: Componente de tarjeta de extensión.
- `src/components/extensions_list.tsx`: Datos de ejemplo de extensiones.
- `src/components/header.tsx`: Header con logo e ícono.
- `src/app/globals.css`: Estilos globales y configuración de fuente.

## Cómo ejecutar

1. Instala dependencias:
   ```powershell
   npm install
   ```
2. Inicia el servidor de desarrollo:
   ```powershell
   npm run dev
   ```
3. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

**Desarrollado por Alexander Suazo**
