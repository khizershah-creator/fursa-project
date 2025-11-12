import { Injectable } from '@angular/core';

export type Role = 'seller' | 'investor';

export interface User {
  id: string;
  fullName: string;
  email: string;
  role: Role;
  password: string; // demo-only (plain)
}

const LS_USERS   = 'fp_users';
const LS_SESSION = 'fp_session';

@Injectable({ providedIn: 'root' })
export class AuthService {

  // --------- session helpers ----------
  me(): User | null {
    const raw = localStorage.getItem(LS_SESSION);
    if (!raw) return null;
    const userId = JSON.parse(raw) as string;
    return this.readUsers().find(u => u.id === userId) ?? null;
  }

  isAuthed(): boolean {
    return !!this.me();
  }

  getRole(): Role | null {
    return this.me()?.role ?? null;
  }

  logout(): void {
    localStorage.removeItem(LS_SESSION);
  }

  // --------- auth actions ----------
  async register(fullName: string, email: string, password: string, role: Role): Promise<User> {
    if (!this.validEmail(email)) throw new Error('Invalid email');
    if (!password) throw new Error('Password is required');

    const users = this.readUsers();
    const exists = users.some(u => u.email.toLowerCase() === email.toLowerCase());
    if (exists) throw new Error('Email already in use');

    const user: User = {
      id: (crypto.randomUUID?.() ?? String(Date.now())),
      fullName,
      email,
      role,
      password, // (for a real app: hash + salt)
    };

    users.push(user);
    this.writeUsers(users);

    // Auto-login after successful register
    localStorage.setItem(LS_SESSION, JSON.stringify(user.id));
    return user;
  }

  async login(email: string, password: string, role: Role): Promise<User> {
    const user = this.readUsers().find(
      u => u.email.toLowerCase() === email.toLowerCase()
    );
    if (!user) throw new Error('Account not found');
    if (user.password !== password) throw new Error('Incorrect password');
    if (user.role !== role) throw new Error('Selected role does not match this account');

    localStorage.setItem(LS_SESSION, JSON.stringify(user.id));
    return user;
  }

  // --------- storage ----------
  private readUsers(): User[] {
    try {
      return JSON.parse(localStorage.getItem(LS_USERS) || '[]') as User[];
    } catch {
      return [];
    }
  }

  private writeUsers(users: User[]) {
    localStorage.setItem(LS_USERS, JSON.stringify(users));
  }

  private validEmail(e: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  }
}
