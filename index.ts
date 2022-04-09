// Import stylesheets
let styles = require ("./style.css");

const text = document.getElementById("defineword");
const submit = document.getElementById("submit");
// const form : HTMLFormElement = document.querySelector("#defineform");
document.body.addEventListener("submit", async function (event) {
  event.preventDefault();
});

// const result = await fetch(form.action, {
//   method: form.method,
//   body: new URLSearchParams([...new FormData(form) as any]),
// })
//   .then((response: Response)=> response.json())
//   .then((json) => json)
//   .catch((error) => console.log(error));

submit.onclick = () => {
  console.log(text);
  // const formData = new FormData(form);
  // console.log(formData);
  // const text = formData.get("defineword") as string;
  fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + text)
    .then((response: Response) => response.json())
    .then((json) => json)
    .catch((error) => console.log(error));
  return false; // prevent reload
};
