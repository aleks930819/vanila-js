/* eslint-disable no-undef */
import API from "./API.js";

export async function loadData() {
  window.app.store.menu = await API.fetchMenu();
}

export async function getProductById(id) {
  if (window.app.store.menu == null) {
    await loadData();
  }
  for (let c of window.app.store.menu) {
    for (let p of c.products) {
      if (p.id == id) {
        return p;
      }
    }
  }
  return null;
}
