import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

submit(){
  let formData = new FormData();
  let fileStore= document.querySelector('input[type="file"]')
  formData.append('image', fileStore.files[0]);

  console.log(formData.get('image'));

  axios({
    method: 'post',
    url: 'http://localhost:8000/fileUpload',
    data: formData,
    config: { headers: {'Content-Type': 'multipart/form-data' }}
    })
    .then(function (response) {
        //handle success
        console.log(response.body);
    })
    .catch(function (response) {
        //handle error
        console.log(response);
    });

}

  render() {
    return (
      <div className="App">
        <div className="formBody">
          <form>
              <input type="file" name='pic' />
              <input type="button" value="Submit" onClick={this.submit}/>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
