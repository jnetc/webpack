import App from './component/app';

const z = new App();
const addApp = z.el.appendChild(z.ui);
console.log('Hello Webpack 4 & add console filter comand from readme.md');
z.get('./main.json')
  .then(data => console.log(data))
  .catch(err => console.log(err));

z.getJson('./main.json')
.then(data => console.log(data))
.catch(err => console.log(err));