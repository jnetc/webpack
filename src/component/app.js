import  addTxt  from './ui/ui';

class App {
  constructor(ui, el) {
    this.ui = addTxt();
    this.el = document.getElementById('app');
  }
}
export default App;

