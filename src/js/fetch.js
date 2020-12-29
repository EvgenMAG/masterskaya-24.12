import template from "../templates/item.hbs";

export default {
  query: "",
  page: 1,
  perPage: 5,
  baseUrl: "https://api.pexels.com/v1",

  get queryValue() {
    return this.query;
  },
  set queryValue(value) {
    return (this.query = value);
  },

  getFetch(val = this.query, place) {
    let key = "563492ad6f9170000100000157c6338c10e8478fa3537a732579381d";
    this.queryValue = val;
    let params = `/search?query=${this.query}&per_page=${this.perPage}&page=${this.page}`;
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
        // console.log(photos);
        this.setPage();
        const items = template(photos);
        place.insertAdjacentHTML("beforeend", items);
        window.scrollBy({
          top: window.innerHeight,
          behavior: "smooth",
        });
      });
  },
  setPage() {
    this.page += 1;
    console.log(this.page);
    return this.page;
  },
  resetPage() {
    this.page = 1;
    return this.page;
  },
};
