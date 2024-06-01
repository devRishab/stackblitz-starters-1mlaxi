import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { SecondComponent } from './app/second/second.component';
import 'zone.js';
import { ThirdComponent } from './app/third/third.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <app-second/>
  <app-third/>
  `,

  imports: [SecondComponent, ThirdComponent],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
