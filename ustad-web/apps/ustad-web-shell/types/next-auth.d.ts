import 'next-auth';

declare module 'next-auth' {
  interface User {
    role: 'student' | 'instructor' | 'admin'; // Ensure role is included
    name?: string | null;
    email?: string | null;
    image?: string | null;
  }

  interface Session {
    user?: {
      role: 'student' | 'instructor' | 'admin'; // Ensure role is included
    } & User;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role: 'student' | 'instructor' | 'admin'; // Ensure role is included
    name?: string | null;
    email?: string | null;
    image?: string | null;
  }
}
