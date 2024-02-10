import { Component,  LOCALE_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UesrServices';
  appDir = 'rtl'
  
  constructor(public translate:TranslateService) {}

  ltr() {
    this.appDir = 'ltr';
    console.log(this.appDir);
    
  }

  rtl() {
    this.appDir = 'rtl';
    console.log(this.appDir);

  }
}
