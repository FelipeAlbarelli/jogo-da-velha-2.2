import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { MainPageComponent } from './app/main-page/main-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainPageComponent],
  template: `<app-main-page />`,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
