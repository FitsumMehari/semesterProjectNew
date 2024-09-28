import { Component, OnInit } from '@angular/core';
import { User } from '../../User.interface';
import { AuthService } from '../../../services/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private translateService: TranslateService
  ) {}

  user: any;

  lang: any = '';

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang' || 'en');
    // this.user = this.auth.getUser();
    this.auth._user.subscribe((next) => {
      this.user = next;
    });
  }

  changeLang(lang: any) {
    const selectedLanguage = lang.target.value;

    localStorage.setItem('lang', selectedLanguage);

    this.translateService.use(selectedLanguage);
  }
  logout() {
    this.auth.logout();
  }
}
