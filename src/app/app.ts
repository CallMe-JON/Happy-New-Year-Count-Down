import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('happy-new-year-app');

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['/welcome']);
  }
}
