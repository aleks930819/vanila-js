const Router = {
  init: () => {
    document.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const route = e.target.href.replace(window.location.origin, "");
        Router.go(route);
      });
    });

    window.addEventListener("popstate", (e) => {
      Router.go(e.state.route, false);
    });

    Router.go(window.location.pathname, false);
  },
  go: (route, addToHistory = true) => {
    if (addToHistory) {
      window.history.pushState({ route }, "", route);
    }
    let pageElement;

    switch (route) {
      case "/":
        pageElement = document.createElement("h1");
        pageElement.textContent = "Home";
        break;
      case "/order":
        pageElement = document.createElement("h1");
        pageElement.textContent = "Order";
        break;
      default:
        if (route.startsWith("/product-")) {
          const id = route.replace("/product-", "");
          pageElement = document.createElement("h1");
          pageElement.textContent = "Product " + id;
          pageElement.dataset.id = id;
        }
    }

    if (pageElement == null) {
      pageElement = document.createElement("h1");
      pageElement.textContent = "404";
    } else {
      const cache = document.querySelector("main");
      cache.childNodes.forEach((node) => {
        node.remove();
      });

      cache.appendChild(pageElement);
      window.screenX = 0;
      window.screenY = 0;
    }
  },
};

export default Router;
