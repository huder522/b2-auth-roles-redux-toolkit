export interface User {
  uid: string;
  name: string;
  role: string;
}

export type Role = 'STUDENT_ROLE' | 'PROFESSOR_ROLE' | 'ADMIN_ROLE';
