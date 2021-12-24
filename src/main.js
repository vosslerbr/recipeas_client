import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

//? IMPORT PAGE COMPONENTS
import Home from './pages/Home.vue';
import Create from './pages/CreateRecipea.vue';

//? DEFINE ROUTES, EACH PAGE COMPONENT GETS ONE
const routes = [
  { path: '/', component: Home },
  { path: '/create', component: Create },
];

//? SET UP THE ROUTER
const router = createRouter({
  // Using recommended default history setup
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

createApp(App).use(router).mount('#app');
