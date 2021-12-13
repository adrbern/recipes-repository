import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '../views/MyApp';
import AdvancedSearch from '../views/AdvancedSearch';
import Profile from '../views/Profile';
import Recipe from '../views/Recipe';
import NewRecipe from '../views/NewRecipe';
import SignIn from '../views/SignIn';
import About from '../views/About';

const routes = [
    { path: '/', component: Home },
    { path: '/advanced-search', component: AdvancedSearch },
    { path: '/profile', component: Profile },
    { path: '/recipe', component: Recipe },
    { path: '/new-recipe', component: NewRecipe },
    { path: '/sign-in', component: SignIn },
    { path: '/about', component: About }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;