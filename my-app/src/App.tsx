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
            <h1 className="defined">Definition</h1>
            <p className="lead">
            Random Text
            </p>
            {def.map((def) => (
            <ul className="list-unstyled">
              <li>{def.word}</li>
                <li>{def.phonetic}</li>
              <li>{def.synonyms}</li>
                <li>Random Text</li>
              <li>
                However, this style only applies to immediate child elements.
              </li>
              <li>
                Nested lists: (maybe synonyms and antonyms?)
                <ul>
                  <li></li>
                  <li>will still show a bullet</li>
                  <li>and have appropriate left margin</li>
                </ul>
              </li>
              <li>This may still come in handy in some situations.</li>
              </ul>
              ))}
           </div>
           
        </main>
      </div> 
    );
  }

  export default App;


