import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  name = '';
  phone = '';
  
  authService = inject(AuthService);
  router = inject(Router);

  constructor() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/']);
    }
  }

  onLogin() {
    if (this.name && this.phone) {
      this.authService.login(this.name, this.phone);
      this.router.navigate(['/']);
    }
  }
}
