import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

// Your existing service & types
import { AuthService, Role } from '../../../core/guards/services/auth.service';

// PrimeNG bits used here
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    RippleModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email = '';
  password = '';
  role: Role = 'investor'; // default selection
  isSubmitting = false;

  constructor(private router: Router, private auth: AuthService) {}

  async onLogin() {
    if (!this.email || !this.password) return;
    this.isSubmitting = true;
    try {
      await this.auth.login(this.email, this.password, this.role);
      // route based on role
      await this.router.navigate(['/', this.role === 'seller' ? 'seller' : 'investor']);
    } catch (err) {
      console.error(err);
      // (optional) surface a toast
    } finally {
      this.isSubmitting = false;
    }
  }
}
