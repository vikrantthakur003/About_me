import { CommonModule } from '@angular/common';
import { Component, } from '@angular/core';

@Component({
  selector: 'app-success',
  imports: [CommonModule],
  templateUrl: './success.component.html',
  styleUrl: './success.component.css'
})
export class SuccessComponent {
  title = 'Success Component';
  stories = [
    { firstLine: '"I secured a 20th rank on GeeksForGeeks', secondLine: 'by solving over 300 problems"', platform: 'GeeksForGeeks', date: 'January 10, 2023', link: 'https://www.geeksforgeeks.org/user/vikrantrajputr/' },
    { firstLine: '"With dedication, ', secondLine: 'I earned the Expert badge on Coding Ninjas"', platform: 'Coding Ninjas', date: 'March 15, 2024', link:'https://www.naukri.com/code360/profile/VikrantRajput' }
  ]

}
