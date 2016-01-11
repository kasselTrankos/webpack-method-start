let bodyText = 'Estamos en pruebas, using ES6d dd, please';
const app = document.getElementById('app');
app.innerHTML = bodyText;

/////////////removes at the en of application
if (module.hot) {
  module.hot.accept();
}
