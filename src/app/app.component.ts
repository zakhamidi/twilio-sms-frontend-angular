import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tasks';

  currentUser: User;

  constructor(private router: Router,private translate: TranslateService
    ) {
      translate.setDefaultLang('en');
    }

}
