# Express basic
Mi primer servidor básico con la dependencia de express

**¿Qué es express?**

[MDN Web Docs](https://developer.mozilla.org/es/docs/Learn/Server-side/Express_Nodejs/Introduction) menciona:
> Express es el framework web más popular de Node, y es la librería subyacente para un gran número de otros frameworks web de Node populares. Proporciona mecanismos para:
>
> - Escritura de manejadores de peticiones con diferentes verbos HTTP en diferentes caminos URL (rutas).
> - Integración con motores de renderización de "vistas" para generar respuestas mediante la introducción de datos en plantillas.
> - Establecer ajustes de aplicaciones web como qué puerto usar para conectar, y la localización de las plantillas que se utilizan para renderizar la respuesta.
> - Añadir procesamiento de peticiones "middleware" adicional en cualquier punto dentro de la tubería de manejo de la petición.

## Instalar dependencias
```
npm install
```

## Dependencias
| Nombre  | Versión | Documentación | 
| :------------: | :------------: | :------------: |
| Express | 4.18.0 | <a href="https://expressjs.com/en/4x/api.html" target="_blank"><img src="https://img.shields.io/badge/Express-Documentation-lightgray?style=for-the-badge&logo=express"></a> |

Versión de Node: <a href="https://nodejs.org/docs/latest-v16.x/api/index.html" target="_blank">16.14.2</a>

## ¿Como correr el servidor?
Una vez instalado las dependencias debemos utilizar el comando `node app.js` y esto empezara a correr nuestra aplicación, sabremos que esta esta corriendo si en la consola se muestra:

<p align="center"><img src="https://user-images.githubusercontent.com/98203302/168713490-271a3fe3-29df-474c-8e0d-075bde379fd9.png"></p>

Podemos acceder a la ruta `localhost:3000` para que nos muestre lo siguiente:

<p align="center"><img src="https://user-images.githubusercontent.com/98203302/168713715-01023714-61ab-4ca5-8a66-4405bf3cf500.png"></p>

## ¿Qué desarrollé?:
- El uso básico de express
- El uso de puertos
- Rutas 
- Query params
