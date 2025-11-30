# Conversor de Monedas con Historial

Proyecto desarrollado en React.

## Descripción

Este proyecto es un simulador / conversor de monedas que permite: -
Ingresar una cantidad y convertirla entre distintas monedas. - Ver el
resultado actualizado inmediatamente. - Guardar cada conversión en un
historial. - Navegar entre dos vistas: Cotizador y Historial.

El objetivo es aplicar conceptos de: - Componentización en React -
Manejo de estado con useState y useEffect - Validaciones - Gestión de
datos en memoria local (localStorage) - Estilos mediante CSS propio

------------------------------------------------------------------------

## Estructura del Proyecto

    src/
     ├── components/
     │    ├── ConverterForm.jsx
     │    ├── Header.jsx
     │    ├── History.jsx
     │    └── ResultCard.jsx
     ├── utils/
     │    ├── api.jsx
     │    └── validators.jsx
     ├── App.jsx
     ├── App.css
     ├── index.css
     ├── main.jsx

------------------------------------------------------------------------

## Componentes principales

### **1. ConverterForm.jsx**

Formulario donde el usuario ingresa: - Moneda origen - Moneda destino -
Cantidad\
Incluye validaciones.

### **2. ResultCard.jsx**

Muestra el resultado de la conversión.

### **3. History.jsx**

Presenta todas las conversiones previas guardadas en el estado y en
`localStorage`.

### **4. Header.jsx**

Muestra el logo y título principal.

------------------------------------------------------------------------

## Estado y Lógica

El proyecto usa:

    useState()
    useEffect()

Para gestionar: - Datos de entrada del usuario\
- Resultado\
- Historial de conversiones\
- Tasas de conversión\
- Vista actual (cotizador / historial)

------------------------------------------------------------------------

## **Cómo ejecutar el proyecto localmente**

### Requisitos previos

Debes tener instalado: - **Node.js** (versión 16 o superior) - **npm**
(incluido con Node)


## 1. Descargar el proyecto

Clonar el repositorio o descargarlo como ZIP.

    git clone <url-del-repo>

Luego entrar a la carpeta:

    cd proyectofinalreact

## 2. Instalar dependencias

    npm install

## 3. Ejecutar en modo desarrollo

    npm run dev

Tu aplicación estará disponible en:

    http://localhost:5173/

------------------------------------------------------------------------

## Estilos

Toda la interfaz usa:

-   `index.css`
-   `App.css`

Incluye estilos para: ✔ formulario\
✔ botones\
✔ tarjetas\
✔ menú superior\
✔ historial

------------------------------------------------------------------------

## Comentarios en el código

El proyecto contiene comentarios explicando: - Funciones principales -
Manejo del estado - Lógica de conversión - Scroll automático hacia el
resultado - Renderizado condicional

Esto cumple el apartado de "Documentación interna del código".

------------------------------------------------------------------------

## Autor

Rolando Andres Palermo.
