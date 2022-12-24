document.addEventListener('click', (e) => {
  const { target } = e;
  if (!target.matches('nav a')) {
    return;
  }
  console.log('click')
  e.preventDefault();
  route();
})

const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, '', event.target.href);
  handleLocation();
};

const routes = {
  404: '/routes/404.html',
  '/': '/routes/home.html',
  '/cart': '/routes/cart.html',
  '/about': '/routes/about.html',
};

const handleLocation = async () => {
  const path = window.location.pathname;
  console.log(path);
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById('main-page').innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;
handleLocation();
