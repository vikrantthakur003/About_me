import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { environment } from '../../../environment/environmnt';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-homepage',
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {
  title = 'Homepage Component';
  firstText: string = '';
  secondText: string = '';
  thirdText: string = '';
  firstFullText: string = "LET'S";
  secondFullText: string = 'START';
  thirdFullText: string = 'DEVELOPING';
  firstCurrentIndex: number = 0;
  secondCurrentIndex: number = 0;
  thirdCurrentIndex: number = 0;
  staticText: any;

  constructor(private languageService: LanguageService) {
    this.staticText = this.languageService.getStaticText('HOMEPAGE');
    console.log(' this.staticText --',  this.staticText);
    
  }

  ngOnInit(): void {
    this.handleTextDisplay();
  }

  handleTextDisplay() {
    this.typeText();
  }

  typeText(): void {
    const interval = setInterval(() => {
      if (this.firstCurrentIndex < this.firstFullText.length) {
        this.firstText += this.firstFullText[this.firstCurrentIndex];
        this.firstCurrentIndex++;
      } else {
        clearInterval(interval);
        this.typeText2();
      }
    }, 200);
  }
  typeText2(): void {
    const interval = setInterval(() => {
      if (this.secondCurrentIndex < this.secondFullText.length) {
        this.secondText += this.secondFullText[this.secondCurrentIndex];
        this.secondCurrentIndex++;
      } else {
        clearInterval(interval);
        this.typeText3();
      }
    }, 200);
  }

  typeText3(): void {
    setInterval(() => {
      if (this.thirdCurrentIndex < this.thirdFullText.length) {
        this.thirdText += this.thirdFullText[this.thirdCurrentIndex];
        this.thirdCurrentIndex++;
      }
    }, 200);
  }

  scheduleMeeting() {
    alert('Meeting schedule')
  }

  openEmailSection() {
    const recipient = environment.receivedEmail;
    const subject = environment.emailSubject;
    const body = environment.emailBody;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, '_blank');
  }

}
