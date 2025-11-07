import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-debug-hello',
  imports: [RouterLink],
  template: `
    <div style="padding:18px">
      ✅ App booted OK
      <div style="margin-top:12px"><a routerLink="/login">Go to Login</a></div>
    </div>
  `
})
export class DebugHelloComponent {}
