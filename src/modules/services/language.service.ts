import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { staticText } from '../../assets/Informations/staticText';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {

  langauge: Subject<string> = new Subject();
  currentLangage: string = 'ENGLISH';

  getCurrectLanguae() {
    const langaguge = JSON.parse(localStorage.getItem('lang') || 'null') || 'ENGLISH';
    return this.currentLangage = langaguge;
  }

  getStaticText(componentType: string) {
    switch (componentType) {
      case 'HEADER': {
        return staticText[this.currentLangage][componentType];
      }
      case 'HOMEPAGE': {
        return staticText[this.currentLangage][componentType];
      }
      default:
        return;
    }
  };

}
