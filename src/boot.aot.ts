import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { AppModuleNgFactory } from '../aot/app.module.ngfactory';
import './styles/styles.scss';

enableProdMode();

platformBrowser()
    .bootstrapModuleFactory(AppModuleNgFactory);
