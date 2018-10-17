class Fetch {

    // Keys
  constructor(){
    this.apiKey = 'AIzaSyCNfqumw4j2MuN5yr5jBiFC9ZhF3Gv0-p8';
    this.redWine = 'red_wine';
    this.whiteWine = 'white_wine';
  }

    // Get data from (url)
  async get(url){
    try {
      const res = await fetch(url)
      const data = await res.json();
      return data;
    } catch (error) {
      alert('We are sorry, content disconected');
    }
  }

    // Put data to (url, data)
  async post(url, data){
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })    
      const send = res.json();
      console.log(send);
      return send;
  }

    // Put data to (url, data)
  async put(url, data){
    try {
      const res = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })    
      const send = res.json();
      console.log(send);
      return send;
    } catch (error) {
      alert('Please, try again later');
    }
  }
}
export default Fetch;