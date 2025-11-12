export type Role = 'seller' | 'investor';

export interface UserRecord {
  id: string;
  fullName: string;
  email: string;
  password: string; // demo only (plain)
  role: Role;
  createdAt: number;
}

export interface Session {
  token: string;
  userId: string;
  role: Role;
  email: string;
  fullName: string;
}
