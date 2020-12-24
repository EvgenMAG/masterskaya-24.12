import { createClient } from "pexels";
import refs from "./refs.js";
import template from "../templates/item.hbs";
let key = "563492ad6f9170000100000157c6338c10e8478fa3537a732579381d";
const client = createClient(key);
console.log(client);
let query = "lotus";
////////////////////
// const images = obj.photos.map((el) => {
//   img.src = el.src.original;
//   // refs.gallery.append(img);

// client.photos.random().then((obj) => {
//   console.log(obj);
//   img.src = obj.src.original;
// });

//////////////////////

// client.photos.search({ query, per_page: 10 }).then((result) => {
//   const images = result.photos.map((item) => {
//     const img = document.createElement("img");
//     img.src = item.src.original;
//     img.width = "320";

//     return img;
//   });
//   return refs.gallery.append(...images);
// });

///////////////////

// client.photos.search({ query, per_page: 10 }).then((result) => {
//   console.log(result.photos);
//   const items = template(result.photos);
//   refs.gallery.insertAdjacentHTML("afterbegin", items);
// });

//////////////
