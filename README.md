# Proyecto Flask con Efectos de Texto

Este es un proyecto web desarrollado con Flask que muestra un saludo animado y código fuente con resaltado de sintaxis.

## Características

- Animación de texto tipo "typing"
- Resaltado de sintaxis para código Python
- Efectos visuales con CSS
- Diseño responsivo
- Botón interactivo para mostrar/ocultar código

## Tecnologías Utilizadas

- Python 3.x
- Flask
- HTML5
- CSS3
- JavaScript
- highlight.js

## Instalación

1. Clona el repositorio:
```bash
git clone <url-de-tu-repositorio>
```

2. Instala las dependencias:
```bash
pip install flask
```

3. Ejecuta la aplicación:
```bash
python app.py
```

4. Abre tu navegador y visita:
```
http://127.0.0.1:5000/
```

## Estructura del Proyecto

```
proyecto_con_flask.py/
│
├── app.py              # Aplicación Flask principal
├── static/
│   ├── script.js      # JavaScript para animaciones
│   └── styles.css     # Estilos CSS
└── templates/
    └── index.html     # Plantilla HTML principal
```

## Uso

- Visita la ruta principal `/` para ver "desconocido" en rojo
- Visita `/<tu-nombre>` para ver un saludo personalizado
- Usa el botón para mostrar/ocultar el código fuente

## Contribuir

Si quieres contribuir a este proyecto:

1. Haz un Fork del repositorio
2. Crea una rama para tu característica (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Autor

Robert Navarro

---
Hecho con ❤️ usando Flask
