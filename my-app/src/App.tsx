import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const form: HTMLFormElement = document.querySelector('#defineform');
  document.body.addEventListener("submit", async function(event){
  event.preventDefault();
   let form = event.target as HTMLFormElement;
      });

form.onsubmit = () => {
  const formData = new FormData(form);
  console.log(formData);
  const text = formData.get('defineword') as string;
  fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + text)
      .then((response: Response) => response.json())
      .then(function(data){console.log(data)})
      .catch((error) => console.log(error));
  console.log(text);
  return true; // prevent reload

};
  return (
      <div className="App">
          {/* <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1>Typescript Dictionary</h1>
          </header> */}
      </div>
  );
}

export default App;
