import { Component } from '@angular/core';

import packageInfo from '../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

  appVersion: string;
  isActive: boolean;

  constructor() {
    this.appVersion = packageInfo.version;
    this.isActive = false;
  }

  onClick() {
    this.isActive = !this.isActive;
  }

}
