import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  constructor(private router: Router) { }

  onSettings(): void {
    this.router.navigate(['/settings']);
  }
  onDetails(): void {
    this.router.navigate(['/details']);
  }
  onLogin(): void {
    this.router.navigate(['']);
  }
}
