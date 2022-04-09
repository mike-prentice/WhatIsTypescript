import React from "react";
import logo from "./logo.svg";
import "./App.css";


function App() {
  
  
  


  const form: HTMLFormElement = document.querySelector("#defineform");
  document.body.addEventListener("submit", async function (event) {
    event.preventDefault();
    let form = event.target as HTMLFormElement;
  });

  form.onsubmit = () => {
    const formData = new FormData(form);
    console.log(formData);
    const text = formData.get("defineword") as string;
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + text)
      .then((response: Response) => response.json())
      .then(function (data) {
         console.log(data);
      })
      .catch((error) => console.log(error));
     console.log(text);
    return true; // prevent reload
  };


  return (
    <div className="App">
      <main className="container">
        <div className="bg-light p-5 rounded">
          <h1 className="defined">Definition</h1>
          <p className="lead">
            Use this part of the page to present your results from the API call.
          </p>
          <ul className="list-unstyled">
            <li>It appears completely unstyled</li>
            <li>It appears completely unstyled.</li>
            <li>Maybe your multiple definitions of the word are here?</li>
            <li>Structurally, it's still a list.</li>
            <li>
              However, this style only applies to immediate child elements.
            </li>
            <li>
              Nested lists: (maybe synonyms and antonyms?)
              <ul>
                <li>are unaffected by this style</li>
                <li>will still show a bullet</li>
                <li>and have appropriate left margin</li>
              </ul>
            </li>
            <li>This may still come in handy in some situations.</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;


