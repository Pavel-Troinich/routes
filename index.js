// document.addEventListener('click', (e) => {
//   const { target } = e;
//   if (!target.matches('nav a')) {
//     return;
//   }
//   console.log('click')
//   e.preventDefault();
//   route();
//  })

const route = (event) => {
  console.log(window.location.href)
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, '', event.target.href);
  handleLocation();
};

const routes = {
  404: '/4004.html',
  '/': '/home.html',
  '/cart': '/tcart.html',
  '/about': '/tabout.html',
};

const handleLocation = async () => {
  const path = window.location.pathname;
  console.log(path);
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById('main-page').innerHTML = html;
};

window.addEventListener('load', route);
window.addEventListener('hashchange', route);
window.onpopstate = handleLocation;
window.route = route;
handleLocation();
