# Catálogo Web Deportivo con Login — Proyecto HTML/CSS/JS

Este es un catálogo deportivo con inicio de sesión, desarrollado con **HTML, CSS, JavaScript y Bootstrap**. Permite acceder con un usuario, visualizar productos, ver detalles en un modal y cerrar sesión.

---

## 🚀 **Características**
- Login con validación (usuario y contraseña)
- Catálogo responsive
- Imágenes reales de productos
- Modal con detalles de cada producto
- Cerrar sesión
- Estilo minimalista negro

---

## 🔑 **Credenciales de acceso**
| Usuario | Contraseña |
|---------|------------|
| `futbol` | `1234` |

---

## 🛠 **Tecnologías**
- HTML5
- CSS3
- JavaScript
- Bootstrap 5

---

## 📌 **Cómo ejecutar**
1. Descargar o copiar el archivo `index.html`
2. Abrirlo en cualquier navegador (Chrome, Edge, Firefox…)
3. Iniciar sesión con las credenciales

---

## 🎯 **Funcionamiento**
- El sistema verifica el login
- Si es correcto, muestra el catálogo
- Cada producto tiene imagen, precio y descripción
- El botón **Ver Detalles** abre un modal
- El botón **Cerrar Sesión** devuelve al login

---

## 🖼 **Personalización**
Puedes editar los productos en el arreglo `products` dentro del script:

```js
const products = [
  { name: "Producto", price: "$000", img: "URL", desc: "Descripción" }
];
