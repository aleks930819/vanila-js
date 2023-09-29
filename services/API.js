const API = {
  url: "/data/menu.json",
  fetchMenu: function () {
    return fetch(this.url).then((response) => response.json());
  },
};

export default API;
