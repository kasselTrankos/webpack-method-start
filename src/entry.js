let bodyText = 'Test for ES6, no olvide fdpfrfdd';
const app = document.getElementById('app');
app.innerHTML = bodyText;

/////////////removes at the en of application
if (module.hot) {
  module.hot.accept();
}
