import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  title = 'Header Component';
  listItem = [
    { title: 'Home' },
    { title: 'About' },
    { title: 'Service' },
    { title: 'Contact Us' }
  ]
  staticText: any;

  constructor(
    private languageService: LanguageService
  ) {
    this.staticText = this.languageService.getStaticText('HEADER');
    console.log('stat --', this.staticText);
    
  }
  ngOnInit(){
    this.listItem = [
      { title: this.staticText.listItem1 },
      { title: this.staticText.listItem2 },
      { title: this.staticText.listItem3 },
      { title: this.staticText.listItem4 }
    ]
  }

  setLangauge(langaguge: 'ENGLISH' | 'HINDI') {
    localStorage.setItem('lang', JSON.stringify(langaguge));
    window.location.reload();
  }
}
