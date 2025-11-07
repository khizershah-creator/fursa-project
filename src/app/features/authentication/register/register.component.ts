import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthService, Role } from '../../../core/guards/services/auth.service';

// PrimeNG (NgModule-based) – inlined to avoid spread/static-analysis issues
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { RippleModule } from 'primeng/ripple';

@Component({
  standalone: true,
  selector: 'app-register',
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CardModule,         // <p-card>
    InputTextModule,    // pInputText
    PasswordModule,     // (use if you switch to pPassword)
    ButtonModule,       // pButton
    DropdownModule,     // <p-dropdown>
    RippleModule,       // pRipple (optional)
  ],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  fullName = '';
  email = '';
  password = '';
  confirmPassword = '';
  role: Role = 'investor';

  roles = [
    { label: 'seller', value: 'seller' },
    { label: 'investor', value: 'investor' },
  ];

  constructor(private auth: AuthService, private router: Router) {}

  async onRegister() {
    // Basic client checks (HTML5 will also help)
    if (!this.fullName || !this.email || !this.password) {
      alert('Please fill all fields.');
      return;
    }
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // Create session + navigate by role
    await this.auth.register(this.fullName, this.email, this.password, this.role);
    await this.router.navigate(['/', this.role]); // → /seller or /investor
  }
}
