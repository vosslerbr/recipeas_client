import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import './assets/css/reset.css';
import './assets/css/global.css';

//? IMPORT PAGE COMPONENTS
import Home from './pages/Home.vue';
import Create from './pages/CreateRecipea.vue';
import Edit from './pages/EditRecipea.vue';
import RecipeaDetail from './pages/RecipeaDetail.vue';
import FocusDirective from './directives/FocusDirective';
import { createPinia } from 'pinia';

//? DEFINE ROUTES, EACH PAGE COMPONENT GETS ONE
const routes = [
  { path: '/', component: Home, meta: { title: 'Recipeas | Home' } },
  { path: '/create', component: Create, meta: { title: 'Recipeas | Create' } },
  { path: '/recipea/:id', component: RecipeaDetail, meta: { title: 'Recipeas | Detail' } },
  { path: '/recipea/edit/:id', component: Edit, meta: { title: 'Recipeas | Edit' } },
];

//? SET UP THE ROUTER
const router = createRouter({
  // Using recommended default history setup
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

// this will update the document <title> for the routes
router.afterEach((to) => {
  if (to.meta.title) {
    document.title = `${to.meta.title}`;
  } else {
    document.title = 'Recipeas';
  }
});

createApp(App).use(createPinia()).use(router).directive('focus', FocusDirective).mount('#app');
