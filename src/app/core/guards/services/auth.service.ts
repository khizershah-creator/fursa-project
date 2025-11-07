import { Injectable } from '@angular/core';

export type Role = 'seller' | 'investor';

export interface SessionUser {
  id: string;
  fullName: string;
  email: string;
  role: Role;
}

const STORAGE_KEY = 'fursa_session';

@Injectable({ providedIn: 'root' })
export class AuthService {
  /** Return current session user (or null) */
  me(): SessionUser | null {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as SessionUser) : null;
  }

  /** Mock register: save user, return it */
  async register(fullName: string, email: string, _password: string, role: Role): Promise<SessionUser> {
    const user: SessionUser = {
      id: (globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2)),
      fullName,
      email,
      role,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    return user;
  }

  /** Mock login: save user, return it */
  async login(email: string, _password: string, role: Role): Promise<SessionUser> {
    const fullName = this.me()?.fullName ?? 'User';
    const user: SessionUser = {
      id: (globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2)),
      fullName,
      email,
      role,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    return user;
  }

  logout(): void {
    localStorage.removeItem(STORAGE_KEY);
  }
}
