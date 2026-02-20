import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';


export const authOptions = {
    // Determine providers
    providers: [
        ...(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
            ? [
                GoogleProvider({
                    clientId: process.env.GOOGLE_CLIENT_ID,
                    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                }),
            ]
            : []),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                // Placeholder logic until user persistence is wired up
                // Hardcoded admin for initial testing
                const user = {
                    id: "1",
                    name: "Clever Admin",
                    email: "admin@clever.com",
                    role: "admin"
                };

                const emailInput = credentials?.email?.trim().toLowerCase();

                if (emailInput === user.email && credentials?.password === "password") {
                    return user;
                }

                // Return null if user data could not be retrieved
                return null;
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET || process.env.AUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    callbacks: {
        async signIn({ user, account }) {
            if (account?.provider === "google") {
                return !!user?.email?.endsWith("@clever.com");
            }
            return true; // Allow Credentials provider (dev)
        },
        async jwt({ token, user }) {
            if (user) {
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }) {
            if (session?.user) {
                session.user.role = token.role;
            }
            return session;
        }
    },
    pages: {
        signIn: '/login', // Custom login page (to be built in Task 24)
    }
};
