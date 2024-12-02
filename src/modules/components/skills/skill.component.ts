import { CommonModule } from '@angular/common';
import { Component, HostListener, Renderer2 } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-skill',
  imports: [CommonModule],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class SkillComponent {
  title = 'Skil Component';
  isModalOpen = false;
  skills: any;

  allSkills = [
    { id: 1, title: 'CREATE DESING', },
    { id: 2, title: 'BRANDING', },
    { id: 3, title: 'USER INTERFACE', },
    { id: 4, title: 'USER EXPERIENCE', },
    { id: 5, title: 'CLEAN CODE', },
    { id: 6, title: 'FAST SUPPORT', },
    { id: 7, title: 'FRONT DEVELOPMENT' },
    { id: 8, title: 'BACK DEVELOPMENT', },
    { id: 7, title: 'PROBLEM SOLVING', }
  ]
  constructor(private renderer: Renderer2) {
    this.skills = this.allSkills.slice(0, 6);
  }


  scheduleMeeting() {
    alert('Meeting Scheduled')
  }

  openModal(): void {
    this.isModalOpen = true;
    this.renderer.addClass(document.body, 'overflow-hidden');
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.renderer.removeClass(document.body, 'overflow-hidden');
  }
}
