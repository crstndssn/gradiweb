# Waether App para Gradiweb ☀️

Este proyecto fue creado con create-react-app, tailwindcss y firebase

## Creando el proyecto

El proyecto consumira el API https://openweathermap.org/current mediante una peticion XMLHttpRequest ya que no se permitía fech o axios para conocer las condiciones climaticas de Bogota, Paris, Lyon y tambien muestra las condiciones climaticas en Bogota durante los proximos 3 dias.

## Componentes
El proyecto creo mediante create-react-app, consta de 7 componentes de las diferentes secciones solicitadas:
1. Weather.js: Muestra la temperatura y la condicion climatica de Bogotá mediante un pequeño componente que se encuentra en la parte superior y en mobile queda fixed
2. Places.js: Este componente permite ver los posibles lugares para una visita y un review, las imagenes las tomé de https://www.pexels.com/
3. Locations.js: Mediente el API consulto las condiciones climaticas de Lyon y París, modifico los valores que me trae la API para que concuerden con los mostrados en la interfaz solicitada, divido los componentes de Lyon y París para una mayor claridad de código y facilidad en la solicitud de datos a la API.
4. Header.js: La imagen es de Pexels https://www.pexels.com/ y el nombre es estatico
5. Forecast.js: Este componente contieene la prediccion climatica de Bogota por los proximos 3 dias, todo los resultados son dinamicos segun la api (el dia de la semana, el icono el clima, el estado del cielo, la tempera maxima y minima)

## Styles
Se trato de llevar al 100% el diseño propuesto mediante Tailwindcss https://tailwindcss.com/ un framework de css que funciona con el preprocesador Post https://postcss.org/, algunos iconos se tomaron desde https://heroicons.com/ y los otros los descargue de Flaticon https://flaticon.com/ y los modifique segun el branding propuesto desde Figma https://www.figma.com/login

## Deploy
El deploy de la aplicacion se hice mediante Firebase Hosting https://firebase.google.com/docs/hosting?hl=es-419 

## Link del proyecto
https://weathergradiweb.web.app/


