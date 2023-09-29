/* eslint-disable no-undef */
import API from "./services/API.js";
import Store from "./services/Store.js";
import Router from "./services/Router.js";
import { loadData } from "./services/Menu.js";

window.app = {};

window.app.store = Store;
window.app.router = Router;

window.addEventListener("DOMContentLoaded", () => {
  loadData();
  window.app.router.init();
});
