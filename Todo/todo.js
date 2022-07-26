let todo = ``;

const addDetail = () => {
  let detail = document.getElementById("detail").value;

  todo = `<li>${detail}</li>`;

  let list = document.getElementById("list");
  list.innerHTML += todo;
  document.getElementById("detail").value = "";

  event.preventDefault();
};

import { fullName } from "./test.js";
console.log(fullName);
