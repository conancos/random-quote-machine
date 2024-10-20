<center>

## **RANDOM-QUOTE-MACHINE**

</center>

>Esta aplicación web genera citas aleatorias de personalidades trascendentes y permite a los usuarios interactuar con ellas de manera dinámica.

### Descripción

>[!NOTE]
>_RANDOM-QUOTE-MACHINE_ 
>es una aplicación web construida con _React y CSS avanzado,_ para completar uno de los proyectos finales requeridos para obtener la certificación _**Front End Development Libraries Projects**_ por: [**_freeCodeCamp.org_**](https://freecodecamp.org/espanol).

Su finalidad es proporcionar una forma divertida y motivadora de descubrir nuevas citas de éstas personalidades y poder compartirlas en redes sociales.

---
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

---
### Funcionalidad y Compatibilidad
>La aplicación tiene las siguientes características:

- Trae citas aleatorias de un endpoint y las renderiza en pantalla mediante un botón.
- Permite a los usuarios interactuar con la cita mediante botones de RRSS
  - Tweetear la cita en Twitter.
  - Postear la cita en LinkedIn.
- Utiliza CSS avanzado para crear un diseño atractivo y responsivo.
- Compatibilidad entre navegadores y redes sociales.
  - Las citas vienen en inglés, pero puede usar el traductor integrado de navegadores como Chrome o Brave para traducirlas.
  - Así mismo se ha asegurado del correcto funcionamiento a la hora de insertar la actual cita y su correspondiente autor en ambas redes sociales a través de cada navegador web. 

---
### Características avanzadas CSS utilizadas
>La aplicación utiliza las siguientes características avanzadas de CSS:

- Flexbox para crear layouts flexibles y responsivos.
- Grid para crear diseños de cuadrícula.
- CSS Variables para definir colores y estilos de manera centralizada.
- Animaciones y transiciones para crear efectos visuales atractivos.
- Pseudo-clases y Pseudo-element para crear estilos personalizados.
- Media Queries para mejorar la accesibilidad.

---
>[!NOTE]
>Si encuentras algún problema de compatibilidad en tu navegador, por favor informa en la sección de issues.

<small>Licencia<br>
La aplicación está licenciada bajo la licencia MIT.</small>

>Link al proyecto: **"Inminente"**
<br>

<center>

# - _**by**_ [_**CONANCOS.DEV**_](https://conancos.dev/portfolio)

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