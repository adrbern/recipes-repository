import { Component } from 'angular2/core';
import { SearchComponent } from './header-page/search/search.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { RecommendReceiptService } from './recommend-receip/recommend-receip.service';
//import { DashboardComponent } from './dashboard.component';
import { RecommendReceiptComponent } from './recommend-receip/recommend-receip.component';
//import { HeroDetailComponent } from './hero-detail.component';

import { RecommendListComponent } from './recommend-list/recommend-list.component';
import {ROUTER_DIRECTIVES, RouteConfig, Route, Router, RouterOutlet, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
    selector: 'my-app',
    templateUrl: 'public/js/app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS
    ]

})
@RouteConfig([
    new Route({ path: '/Home', component: RecommendListComponent, name: 'Home' }),
    /*{
        path: '/',
        name: 'Home',
        component: HeaderPageComponent,
        useAsDefault: true
    },
    {
        path: '/login',
        name : 'Login',
        component: ''
    }
    /*{
        path: '/advancesearch',
        name: 'AdvanceSearch',
        component: ''
    },*/
    /*,
    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    },
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    }*/
])
export class AppComponent {
    title = 'Pagina principal';
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */