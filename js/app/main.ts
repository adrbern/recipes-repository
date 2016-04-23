import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {AppComponent} from './app.component';
import {enableProdMode} from 'angular2/core';
import { RootRouter } from 'angular2/src/router/router';
import { Router } from 'angular2/router';

enableProdMode();
bootstrap(AppComponent);