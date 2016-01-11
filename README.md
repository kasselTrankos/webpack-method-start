#WEBPACK-RUNS

Es una pequeña recopilación de formas para hacer arrancar [Webpack](webpack.github.io).

primero:
```bash
npm i
```


Webpack arrancado desde consola, lo que realiza es una compilación y escritura del js final, ideal para usarlo en producción.
La configuración es básica.

```bash
npm run build
```

En los siguientes ejemplos de ejecución de entorno de desarrollo, cumple que los archivos no son generados(escritos en disco) sino que son ejecutados desde memoria. Lo que convierte en más rápido aún el trabajo de desarrollo.

Por cada ejecución de webpack, lleva un webpack.run, lo que hace es generar un build asociado a la configuración del webpack.config.js.

### Primera ejecución de Servidor: webpack-dev-server método oficial de Webpack
Ejecutar el servidor dev [webpack-dev-server](http://webpack.github.io/docs/webpack-dev-server.html) desde un script que configura la ejecucion de webpack-dev-server, esta considero la mejor opción. Que permite paremetrizar de una forma mas sencilla.

Se compila mediante la configuación de webpack.build, y el servidor se configura con webpack.dev.


```bash
npm run dev-server
```
### Segunda ejecución de Servidor: Mediante la webpack webpack-hot-middleware

Este plugin [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware) que me encanta, evita el uso de webpack-dev-server, y puedes usar [express](http://expressjs.com/es/) o [koa](http://koajs.com/).

Sobre esta configuración es unitario el archivo de compilación, y de configuración, webpack.hot.

```bash
npm run hot-server
```


Este proyecto sigue las siguientes normas:

- No se instala ningín modulo de forma global.
