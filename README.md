<div align="center">

## **RANDOM-QUOTE-MACHINE** 
###### Esta aplicación web genera citas aleatorias de personalidades relevantes y permitiendo al usuario interactuar con ellas de manera dinámica en sus RRSS.
</div>
<br>

### Descripción

- _RANDOM-QUOTE-MACHINE_ es una aplicación web construida con _**REACT**_ para completar uno de los proyectos finales requeridos para obtener la certificación _**Front End Development Libraries Projects**_ por [**_freeCodeCamp.org_**](https://freecodecamp.org/espanol).

### Estructura
>La estructura del proyecto es la siguiente:

- **/src/:** Carpeta principal que contiene el código fuente de la aplicación.
    - **main.jsx:** Es el punto de entrada de la aplicación React, donde se importa el componente principal App.jsx y se renderiza en el DOM con el ID "root".
    - **index.css:** Archivo de estilos que define algunos aspectos generales de la aplicación, la declaración de las variables css de todo el proyecto y las fuentes.
    - **App.jsx:** Componente principal de la aplicación donde se constituye el esquema general y renderiza los demás componentes.
    - **app.css:** Archivo que estiliza la estructura principal, donde se importan otros archivos de estilos secundarios, se conforman las transiciones, animaciones y las media queries para el texto de la aplicación, independiente del propio patrón de diseño responsivo general.
- **/components/:** El propio nombre describe el contenido de la carpeta.
   - **RandomQuote.jsx:** Componente que utiliza la API fetch para realizar una solicitud asíncrona a un endpoint que devuelve un objeto JSON del que se extrae aleatoriamente una cita y su correspondiente autor, manejando la respuesta mediante promesas y actualizando el estado del componente para renderizar dinámicamente la propia cita aleatoria en la interfaz de usuario (U/I).
   - **RandomColor.jsx:** Componente que genera un color aleatorio de entre una basta gama, coloreando las fuentes, botones y fondo de la App.
   - **QuoteButton.jsx:** Componente que renderiza el botón que recibe el manejador de click por props, seteando el estado de la variable _color_, e iniciando el resto de procesos de estados en la aplicación.
   - **SocialButtons.jsx:** Componente que renderiza los botones para compartir dinámicamente las citas a través de las RRSS X(Twitter) o LinkedIn.
- **/assets/:** Carpeta que contiene activos variados (estilos específicos, iconos, etc).
- **vite.config.js:** Archivo de configuración de _**Vite**_ que define la configuración del entorno de desarrollo para la aplicación _**React**_, utilizando el plugin @vitejs/plugin-react-swc para soporte de JSX y optimización del código.

### Funcionalidad y Compatibilidad
>La aplicación tiene las siguientes características:

- Trae citas aleatorias de un endpoint y las renderiza en pantalla dinámicamente.
- Permite a los usuarios interactuar con la cita mediante botones de RRSS
  - Tweetear la cita en Twitter.
  - Postear la cita en LinkedIn.
- Utiliza CSS avanzado para crear un diseño atractivo y responsivo.
- Compatibilidad entre navegadores y redes sociales.
  - Las citas vienen en inglés, pero puede usar el traductor integrado de navegadores como Chrome o Brave para traducirlas.
  - Así mismo se ha asegurado del correcto funcionamiento a la hora de insertar la actual cita y su correspondiente autor en ambas redes sociales a través de cada navegador web. 

>[!NOTE]
>Si encuentras algún problema de compatibilidad en tu navegador, por favor informa en la sección de issues.

### Características avanzadas CSS utilizadas
>La aplicación utiliza las siguientes características avanzadas de CSS:

- [x] Flexbox para crear layouts flexibles y responsivos.
- [x] Grid para crear diseños de cuadrícula.
- [x] CSS Variables para definir colores y estilos de manera centralizada.
- [x] Animaciones y transiciones para crear efectos visuales atractivos.
- [x] Pseudo-clases y Pseudo-element para crear estilos personalizados.
- [x] Media Queries para mejorar el responsive design.
- [ ] Scroll-driven-animations.

### Licencia

Este proyecto está licenciado bajo la **GNU General Public License v3.0**.  
<div align="center">

![GPLv3 Logo](https://www.gnu.org/graphics/gplv3-127x51.png)

</div>

>[!IMPORTANT]
>Pese a ser un pequeño proyecto, la implementación de una licencia tiene como objetivo el practicar, aprender y familiarizarse con sus características, estableciendo una estructura adecuada que informe correctamente al usuario.
>Esta licencia copyleft exige que cualquier software derivado sea también distribuido bajo la GPL. Promueve el software libre de código abierto, protege contra reclamos de patentes y requiere atribución.

### Información sobre la Licencia

- **Tipo de Licencia**: GPL-3.0
- **Fecha de publicación**: 20-10-2024
- **Autor**: conan_cos.dev

### Resumen de la Licencia

La GPL-3.0 garantiza a los usuarios las siguientes **libertades:**

1. **Usar**: Puedes usar el software para cualquier propósito.
2. **Estudiar**: Puedes estudiar cómo funciona el software y adaptarlo a tus necesidades.
3. **Modificar**: Puedes modificar el software y compartir tus modificaciones.
4. **Distribuir**: Puedes compartir copias del software original y de tus modificaciones con otros.

### Protección de Patentes

Si contribuyes al proyecto, renuncias a cualquier reclamo de patente relacionado con tus contribuciones. Esto significa que no podrás demandar a los usuarios por infracción de patentes en relación con el código que aportaste.


### Más Información

Para obtener más detalles, consulta el texto completo de la [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.html).

### Fuentes de Datos, Funcionalidad y Diseño

Las citas inspiradoras utilizadas en esta aplicación se obtienen de [**quotes.json**](https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json), proporcionado por camperbot.

Así mismo la funcionalidad y diseño están basados inicialmente sobre esta [**app**](https://random-quote-machine.freecodecamp.rocks/), siguiendo las especificaciones del [**ejercicio de freeCodeCamp**](https://www.freecodecamp.org/espanol/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-random-quote-machine).

---

<div align="center">

### Link del sitio web: &nbsp; [**random-quote-machine ↗**](https://conancos.dev/random-quote-machine/)

<br>

[![URL LOGO](public/logo-conancos.png)](https://conancos.dev/portfolio)

Copyright &copy; 2024 conan_cos - bajo licencia <a href="https://www.gnu.org/licenses/gpl-3.0.html">GNU General Public License v3.0</a>.

</div>

<!-- 
Google Chrome Versión 129.0.6668.103 (Build oficial) (64 bits)
Brave1 Versión 1.71.114 Chromium: 130.0.6723.58 (Build oficial) (64 bits)
Mozilla Firefox (versión 90+)
Safari (versión 14+)


[!IMPORTANT] Si deseas agregar una función de traducción de citas integrada, por favor informa en la sección de issues.

Contribuciones
Si deseas contribuir a la aplicación, por favor sigue los siguientes pasos:

Fork el repositorio.
Crea una rama para tu contribución.
Realiza tus cambios y pruebas.
Envía un pull request.
[!TIP] Asegúrate de seguir las convenciones de codificación y estilo de la aplicación.
 -->
