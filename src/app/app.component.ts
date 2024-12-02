import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../modules/components/header/header.component';
import { HomepageComponent } from '../modules/components/hompage/homepage.component';
import { AboutComponent } from '../modules/components/about-me/about.component';
import { SkillComponent } from '../modules/components/skills/skill.component';
import { SuccessComponent } from '../modules/components/success-story/success.component';
import { ContactComponent } from '../modules/components/contact-us/contact.component';
import { CopyrightComponent } from '../modules/components/copyright-page/copyright.component';
import { ToastComponent } from '../modules/components/shared-components/toast-component/toast.component';
import { LanguageService } from '../modules/services/language.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HomepageComponent, AboutComponent, SkillComponent, SuccessComponent, ContactComponent, CopyrightComponent, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'website';
  showScrollButton = false;
  socialMedia = [
    { imageLink: 'https://pic.surf/2cc', redirect: '' },
    { imageLink: 'https://pic.surf/wp5', redirect: '' },
    { imageLink: 'https://pic.surf/dq5', redirect: '' },
    { imageLink: 'https://pic.surf/bkr', redirect: '' },
  ]

  constructor(
    private languageService: LanguageService
  ) {
    this.languageService.getCurrectLanguae();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.showScrollButton = window.scrollY > 0;
  }
  ngOnInit(): void {
    this.scrollToTop();
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
