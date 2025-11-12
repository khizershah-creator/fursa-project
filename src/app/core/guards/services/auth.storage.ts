const USERS_KEY = 'mock_users';
const SESSION_KEY = 'mock_session';

export const AuthStorage = {
  readUsers(): any[] {
    try { return JSON.parse(localStorage.getItem(USERS_KEY) || '[]'); }
    catch { return []; }
  },
  writeUsers(users: any[]) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  },
  readSession() {
    try { return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null'); }
    catch { return null; }
  },
  writeSession(session: any) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  },
  clearSession() {
    localStorage.removeItem(SESSION_KEY);
  }
};
