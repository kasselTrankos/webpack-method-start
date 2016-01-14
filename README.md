#WEBPACK-RUNS

Es una pequeña recopilación de formas para hacer arrancar [Webpack](webpack.github.io).

primero:
```bash
npm i
```


Webpack arrancado desde consola, lo que realiza es una compilación y escritura del js final.
La configuración es básica.

```bash
npm run build
```

En los siguientes ejemplos de ejecución de entorno de desarrollo, cumple que los archivos no son generados(escritos en disco) sino que son ejecutados desde memoria. Lo que convierte en más rápido aún el trabajo de desarrollo.

Por cada ejecución de webpack, lleva un webpack.run, lo que hace es generar un build asociado a la configuración del webpack.config.js.

### Primera ejecución de Servidor: webpack-dev-server método oficial de Webpack
Ejecutar el servidor dev [webpack-dev-server](http://webpack.github.io/docs/webpack-dev-server.html) desde un script que configura la ejecucion de webpack-dev-server. Que permite paremetrizar de una forma mas sencilla.

Se compila mediante la configuación de webpack.build, y el servidor se configura con webpack.dev.




```bash
npm run dev-server
```
### Segunda ejecución de Servidor: webpack-hot-middleware

Este plugin [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware) que me encanta, evita el uso de webpack-dev-server, y puedes usar tu propio server ya sea [express](http://expressjs.com/es/) o [koa](http://koajs.com/).

Esta opción es la que utiliza [react-transform-hmr](https://github.com/gaearon/react-transform-hmr), el motivo es que te permite acceder al punto de cambio de webpack mediante socket. Y desde aqui realizar la programación front(javasctipt) necesaria para poder hacer el cambio en caliente.





```bash
npm run hot-server
```
### Tercera ejecución de servidor: Usando browser-sync

Utilizamos [browser-sync](https://www.browsersync.io/), debo buscar si hay modelo para hmr.
```bash
npm run browser-sync
```

Este proyecto sigue las siguientes normas:

- No se instala ningín modulo de forma global.
