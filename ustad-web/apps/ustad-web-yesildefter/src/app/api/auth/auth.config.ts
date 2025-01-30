import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Please enter an email and password');
        }

        // TODO: Replace with your actual authentication logic
        // This is just a test implementation
        if (
          credentials.email === 'test@example.com' &&
          credentials.password === 'password'
        ) {
          return {
            id: '1',
            email: credentials.email,
            name: 'Test User',
            role: 'student',
          };
        }

        throw new Error('Invalid email or password');
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: '/auth/login',
    error: '/auth/error',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // Only include basic user information
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        // Only include basic user information
        session.user.email = token.email;
        session.user.name = token.name;
      }
      return session;
    },
  },
};
