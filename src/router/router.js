import { createRouter, createWebHashHistory } from 'vue-router';

import Home from '../views/MyApp';
import AdvancedSearch from '../views/AdvancedSearch';
import Profile from '../views/Profile';
import Recipe from '../views/Recipe';
import NewRecipe from '../views/NewRecipe';
import Register from '../views/Register';
import RegisterSuccess from '../views/RegisterSuccess';
import About from '../views/About';

const routes = [
    { path: '/home', name: 'home', component: Home },
    { path: '/advanced-search', name: 'advanced-search', component: AdvancedSearch },
    { path: '/profile', name: 'profile', component: Profile },
    { path: '/recipe', name: 'recipe', component: Recipe },
    { path: '/new-recipe', name: 'newRecipe', component: NewRecipe },
    { path: '/register', name: 'register', component: Register },
    { path: '/register-success', name: 'register-success', component: RegisterSuccess },
    { path: '/about', name: 'about', component: About }
];

const router = createRouter({
    history: createWebHashHistory(),
    mode: 'history',
    routes,
})

export default router;