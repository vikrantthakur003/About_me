import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { InputComponent } from '../shared-components/input-component/input.component';
import { TextareaComponent } from '../shared-components/textarea-component/textarea.component';
import { SharedService } from '../../services/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, InputComponent, TextareaComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  title = 'contact Component';
  inputValue = '';
  contactForm = {
    name: { firstNameLabelText: 'First Name', firstNamePlaceHolder: 'Enter your first name', lastNameLabelText: 'Last Name', lastNamePlaceHolder: 'Enter your last name' },
    email: { emailLabelText: 'Email', emailPlaceHolder: 'Enter your email address' },
    phone: { phoneLabelText: 'Phone', phonePlaceHolder: 'Enter your phone number' },
    message: { messageLabelText: 'Message', messagePlaceHolder: 'Enter your message' },
  };
  user = {
    name: 'VIKRANT RANA',
    profession: 'SOFTWARE ENGINEER',
    address: '2347, Sector 71, Mohali Punjab, India',
    phoneNumber: '+91 6397394887',
    email: 'vikrantrana.k@gmail.com'
  }

  userDetails: any = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }


  socialMedia = [
    { imageLink: 'https://pic.surf/2cc', redirect: '' },
    { imageLink: 'https://pic.surf/wp5', redirect: '' },
    { imageLink: 'https://pic.surf/dq5', redirect: '' },
    { imageLink: 'https://pic.surf/bkr', redirect: '' },
  ]
  constructor(
    private sharedService: SharedService,
  ) {

  }

  handleInput(value: any, type: 'first-name' | 'last-name' | 'email' | 'phone' | 'message') {
    switch (type) {
      case 'first-name':
        this.userDetails.firstName = value;
        break;
      case 'last-name':
        this.userDetails.lastName = value;
        break;
      case 'email':
        this.userDetails.email = value;
        break;
      case 'phone':
        this.userDetails.phone = value;
        break;
      case 'message':
        this.userDetails.message = value;
        break;
      default:
        break;
    }
  }

  submitDetails() {
    if (this.userDetails.firstName.trim() &&
      this.userDetails.lastName.trim() &&
      this.userDetails.email.trim() &&
      this.userDetails.phone.trim() &&
      this.userDetails.message.trim()) {
        this.sharedService.showToast('Thanks for Submitting Details', 'success');
        this.userDetails = {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        };
        return;
    }
    this.sharedService.showToast('All Fields required', 'warning');
  }
}
