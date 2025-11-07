import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PRIMENG_IMPORTS } from '../../../shared/ui/primeng';
import { AuthService, Role } from '../../../core/guards/services/auth.service';

@Component({
  standalone: true,
  selector: 'app-register',
  imports: [CommonModule, FormsModule, PRIMENG_IMPORTS],
  templateUrl: './register.component.html'
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
    // minimal guard (don’t disable the button unless you want to)
    if (!this.fullName || !this.email || !this.password) return;
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    await this.auth.register(this.fullName, this.email, this.password, this.role);
    // route to area based on role
    this.router.navigate(['/' + this.role]);
  }
}
