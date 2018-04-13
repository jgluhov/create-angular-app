import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { hmrBootstrap } from './hmr';
import './styles/styles.css';

const bootstrap = () => platformBrowserDynamic()
  .bootstrapModule(AppModule);

if (module.hot) {
  hmrBootstrap(module, bootstrap);
} else {
  bootstrap();
}
