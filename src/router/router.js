import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '../views/MyApp';
import AdvancedSearch from '../views/AdvancedSearch';
import Profile from '../views/Profile';
import Recipe from '../views/Recipe';
import NewRecipe from '../views/NewRecipe';
import SignIn from '../views/SignIn';
import About from '../views/About';

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/advanced-search', name: 'advance-search', component: AdvancedSearch },
    { path: '/profile', name: 'profile', component: Profile },
    { path: '/recipe', name: 'recipe', component: Recipe },
    { path: '/new-recipe', name: 'new-recipe', component: NewRecipe },
    { path: '/sign-in', name: 'sign-in', component: SignIn },
    { path: '/about', name: 'about', component: About }
];

const router = createRouter({
    history: createWebHashHistory(),
    mode: 'history',
    routes,
})

export default router;