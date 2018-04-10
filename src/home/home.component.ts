import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  styles: [ require('./home.styles.css').toString() ],
  template: `
    <p>SharedCanvas</p>
    <canvas></canvas>
  `
})

export class HomeComponent {
}
