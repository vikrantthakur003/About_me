import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-copyright',
  imports: [CommonModule,],
  templateUrl: './copyright.component.html',
  styleUrl: './copyright.component.css'
})
export class CopyrightComponent {
  title = 'copyright Component';
}
