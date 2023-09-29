const Router = {
  init: () => {
    document.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        Router.go(e.target.href);
      });
    });

    Router.go(window.location.pathname, false);
  },
  go: (route, addToHistory = true) => {
    if (addToHistory) {
      window.history.pushState({ route }, "", route);
    }
  },
};

export default Router;
