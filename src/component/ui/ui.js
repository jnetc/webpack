const addTxt = el => {
  el = document.createElement('p');
  el.textContent = `Hello Webpack 4`;
  return el;
}
export default addTxt;