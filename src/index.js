import css from "./css/styles.css";
import refs from "./js/refs.js";
import fetchObject from "./js/fetch";
// import libs from "./js/libs.js";

const { form, button, gallery } = refs;

form.addEventListener("submit", handelClientsRequest);

function handelClientsRequest(e) {
  e.preventDefault();
  const inputValue = e.target.elements.query.value;
  fetchObject.getFetch(inputValue, gallery);
}
