import { Component} from '@angular/core';
import { Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  en=false;

  constructor(private router: Router,private translate: TranslateService
    ) {
      translate.setDefaultLang('en');
    }

    useLanguage(language: string): void {
      this.translate.use(language);
      if(this.en==true){
        this.en=false;
      }
      else{
        this.en=true;
      }
  }
}
