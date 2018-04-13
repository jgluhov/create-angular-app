import { NgModuleRef, ApplicationRef } from '@angular/core';
import { createNewHosts } from '@angularclass/hmr';

export function hmrBootstrap<T>(
  module: __WebpackModuleApi.Module,
  bootstrap: () => Promise<NgModuleRef<T>>
) {
  if (!module.hot) {
    console.error('HMR is not enabled for webpack-dev-server!');
    console.log('Are you using the --hmr flag for ng serve?');
    return;
  }

  let ngModule: NgModuleRef<T>;
  module.hot.accept();
  bootstrap().then(mod => ngModule = mod);

  module.hot.dispose(() => {
    const appRef: ApplicationRef = ngModule.injector.get(ApplicationRef);
    const elements = appRef.components.map(c => c.location.nativeElement);
    const makeVisible = createNewHosts(elements);
    ngModule.destroy();
    makeVisible();
  });
}
