import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: /*html*/`
    <h1>{{title}}</h1>    
    <router-outlet></router-outlet>
  `
})

export class AppComponent {
  public title: string = 'App Component';
}
