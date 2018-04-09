import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: /*html*/`    
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})

export class AppComponent {
  public title: string = 'App Component';
}
