let bodyText = 'Test for ES6, no olvide fdpfrdfdd';
const app = document.getElementById('app');
app.innerHTML = bodyText;

/////////////removes at the en of application
if (module.hot) {
  module.hot.accept();
}
