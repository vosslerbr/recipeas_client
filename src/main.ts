import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import './assets/css/reset.css';
import './assets/css/global.css';

//? IMPORT PAGE COMPONENTS
import Home from './pages/Home.vue';
import Create from './pages/CreateRecipea.vue';
import RecipeaDetail from './pages/RecipeaDetail.vue';
import FocusDirective from './directives/FocusDirective';

//? DEFINE ROUTES, EACH PAGE COMPONENT GETS ONE
const routes = [
  { path: '/', component: Home },
  { path: '/create', component: Create },
  { path: '/recipea/:id', component: RecipeaDetail },
];

//? SET UP THE ROUTER
const router = createRouter({
  // Using recommended default history setup
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

createApp(App).use(router).directive('focus', FocusDirective).mount('#app');
