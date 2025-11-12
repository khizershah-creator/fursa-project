import { Injectable } from '@angular/core';
import { AuthStorage } from './auth.storage';
import { Role, Session, UserRecord } from './auth.types';

function uid() { return crypto.randomUUID?.() || Math.random().toString(36).slice(2); }
function token() { return 'tok_' + Math.random().toString(36).slice(2) + Date.now(); }
function delay<T>(v: T, ms = 300) { return new Promise<T>(res => setTimeout(() => res(v), ms)); }

@Injectable({ providedIn: 'root' })
export class MockApi {
  async register(fullName: string, email: string, password: string, role: Role) {
    const users = AuthStorage.readUsers() as UserRecord[];
    const exists = users.some(u => u.email.toLowerCase() === email.toLowerCase());
    if (exists) throw new Error('Email already in use');

    users.push({ id: uid(), fullName, email, password, role, createdAt: Date.now() });
    AuthStorage.writeUsers(users);
    return delay({ ok: true });
  }

  async login(email: string, password: string, role: Role) {
    const users = AuthStorage.readUsers() as UserRecord[];
    const user = users.find(u =>
      u.email.toLowerCase() === email.toLowerCase() &&
      u.password === password &&
      u.role === role
    );
    if (!user) throw new Error('Invalid credentials or role');

    const sess: Session = {
      token: token(),
      userId: user.id,
      role: user.role,
      email: user.email,
      fullName: user.fullName
    };
    AuthStorage.writeSession(sess);
    return delay(sess);
  }

  async me(): Promise<Session | null> {
    return delay(AuthStorage.readSession());
  }

  async logout() {
    AuthStorage.clearSession();
    return delay({ ok: true });
  }
}
