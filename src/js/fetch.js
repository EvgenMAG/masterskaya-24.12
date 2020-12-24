import template from "../templates/item.hbs";

export default {
  query: "",
  page: 1,
  perPage: 4,
  baseUrl: "https://api.pexels.com/v1",

  get queryValue() {
    return this.query;
  },
  set queryValue(value) {
    return (this.query = value);
  },

  getFetch(val, place) {
    let key = "563492ad6f9170000100000157c6338c10e8478fa3537a732579381d";
    this.queryValue = val;
    let params = `/search?query=${this.query}`;
    let url = this.baseUrl + params;
    let options = {
      headers: {
        Authorization: key,
      },
    };
    return fetch(url, options)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data.photos;
      })
      .then((photos) => {
        console.log(photos);
        const items = template(photos);
        place.insertAdjacentHTML("afterbegin", items);
      });
  },
};
