import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { RippleModule } from 'primeng/ripple';

type Role = 'seller' | 'investor';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [
    CommonModule, FormsModule, RouterModule,
    CardModule, InputTextModule, PasswordModule,
    ButtonModule, SelectButtonModule, RippleModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';
  role: Role = 'seller';
  roles = [
    { label: 'vendor', value: 'seller', desc: 'I want to sell or finance my business' },
    { label: 'investor', value: 'investor', desc: 'I am looking for investment opportunities' }
  ];

  onLogin() { console.log('login', this.email, this.role); }
}
