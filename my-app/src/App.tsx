import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { render } from "@testing-library/react";
const axios = require('axios');

function App() {
  
  const [def, setDef] = useState([]);
  
  
  const form: HTMLFormElement = document.querySelector("#defineform");
  document.body.addEventListener("submit", async function (event) {
    event.preventDefault();
    let form = event.target as HTMLFormElement;
  });

 
  
    useEffect(() => {
      const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
      form.onsubmit = async () => {
        const formData = new FormData(form);
        // console.log(formData);
         const text = formData.get("defineword") as string;
        axios.get(url + text)
          .then((res) => {
            console.log(res);
            setDef(res.data);
          })
          .catch((err) => {
            console.log(err);
        })
        //.then((response: Response) => response.json())
        // const json = response.json();
        // setDef(await json);
        //.then(function (data) {
        // console.log(json);
        //  console.log(def);
      }
    }
      
      //.catch((error) => console.log(error));
      //console.log(text);
        
      ,[]);

  
    // prevent reload
  


    return (
      <div className="App">
         <main className="container">
          <div className="bg-light p-5 rounded">
            <h1 className="defined">Dictionary App</h1>
            <p className="lead">******************************************</p>
            {def.map((def) => (
              <ul className="list-unstyled">
                <li>{def.word}</li>
                <li><i>Phonetic:</i> {def.phonetic}</li>
                <li><i>Part of Speech:</i>{def.meanings[0].partOfSpeech}</li>                
                <li><i>Synonyms:</i> {def.meanings[0].synonyms}</li>
                <li><i>Antonyms:</i> {def.meanings[0].antonyms}</li>
                <li><i>Origin:</i> {def.origin}</li>
                {def.meanings.map((meanings) => (
                  <ul className="list-unstyled">
                      <li>{meanings.partsOfSpeech}</li>
                    {meanings.definitions.map((definitions) => (
                      <ul className = "list-unstyled">
                        <li><i>Definition:</i> {definitions.definition}</li>
                        <li>*************************************************</li>
                      </ul>
                    ))}
                  </ul>
                ))}
              </ul>
              ))}
          </div>
        </main>
      </div> 
    );
  }

  export default App;


