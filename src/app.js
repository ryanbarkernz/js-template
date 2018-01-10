import WebFont from 'webfontloader';
import './js/module1';
import './js/module2';
import './scss/index.scss';

if (module.hot) module.hot.accept();

WebFont.load({
  google: {
    families: ['Montserrat:300,400'],
  },
});

const rootEl = document.querySelector('#root');
rootEl.innerHTML = `<p>Hello World</p>
  <img src="/static/img/spaceman.png" alt="" />`;
