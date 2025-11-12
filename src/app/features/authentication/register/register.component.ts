import { Component, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup, ValidationErrors } from '@angular/forms';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

type Role = 'vendor' | 'investor';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    // PrimeNG
    CardModule, InputTextModule, DropdownModule, PasswordModule, ButtonModule, RippleModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private loc = inject(Location);

  roles = [
    { label: 'vendor', value: 'vendor' as Role },
    { label: 'investor', value: 'investor' as Role },
  ];

  form: FormGroup = this.fb.group(
    {
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      role: ['investor' as Role, Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm: ['', [Validators.required]],
    },
    { validators: [RegisterComponent.matchPasswords()] }
  );

  // nice sugar to use in template: f['fullName'], f['email'] etc.
  get f() {
    return this.form.controls as Record<string, any>;
  }

  static matchPasswords() {
    return (group: FormGroup): ValidationErrors | null => {
      const p = group.get('password')?.value;
      const c = group.get('confirm')?.value;
      return p && c && p !== c ? { mismatch: true } : null;
    };
  }

  goBack() {
    this.loc.back();
  }

  onSubmit() {
    // ensure we can click the button only when valid; still mark all just in case
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    // TODO: call your actual API/AuthService here.
    // await this.auth.register({ ...this.form.value });

    // For now, navigate based on role:
    const role: Role = this.form.value.role;
    this.router.navigate([role === 'vendor' ? '/seller' : '/investor']);
    
  }
  
}
