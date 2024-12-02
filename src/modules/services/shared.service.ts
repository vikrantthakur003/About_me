import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  toast: Subject<{ title: string; type: 'info' | 'success' | 'warning' | 'error' | 'custom' }> = new Subject();

  showToast(title: string, type: 'success' | 'error' | 'info' | 'warning' = 'info'): void {
    
    this.toast.next({ title, type });
  }
}
