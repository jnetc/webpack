import  addTxt  from './ui/ui';

class App {
  constructor(ui, el) {
    this.ui = addTxt();
    this.el = document.getElementById('app');
  }

    // Fetch 2015
  get(url){
    return new Promise((res, err)=> {
      fetch(url)
      .then(response => response.status == 200 ? response.json() : alert('We are sorry, content disconected'))
      .then(data => res(data))
      .catch(err => err(err));
    }) 
  }

    // Async 2017
  async getJson(url){
    let res = await fetch(url);
    let dataASync = await res.json();
    return dataASync;
  }
}
export default App;

