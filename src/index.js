import css from "./css/styles.css";
import refs from "./js/refs.js";
import fetchObject from "./js/fetch";
// import libs from "./js/libs.js";

const { form, button, gallery, input, loadMoreBtn } = refs;

form.addEventListener("submit", handelClientsRequest);
loadMoreBtn.addEventListener("click", onLoadBtn);

function handelClientsRequest(e) {
  e.preventDefault();
  gallery.innerHTML = "";

  fetchObject.resetPage();
  const inputValue = e.target.elements.query.value;
  fetchObject.getFetch(inputValue, gallery);
  input.value = "";
  loadMoreBtn.classList.remove("is-hidden");
}

function onLoadBtn() {
  // fetchObject.setPage();
  fetchObject.getFetch(undefined, gallery);
}
