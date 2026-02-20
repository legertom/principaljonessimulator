import { describe, it, expect } from 'vitest';
import { authOptions } from '@/lib/auth';

describe('auth.js Configuration', () => {
    describe('Credentials Provider Configuration', () => {
        const credentialsProvider = authOptions.providers.find(p => p.name === 'Credentials' || p.options?.name === 'Credentials');
        const options = credentialsProvider.options || credentialsProvider;

        it('exists and is configured correctly', () => {
            expect(options).toBeDefined();
            expect(options.credentials).toHaveProperty('email');
            expect(options.credentials).toHaveProperty('password');
        });

        describe('authorize function', () => {
            it('should accept valid credentials with perfect match', async () => {
                const result = await options.authorize({
                    email: 'admin@clever.com',
                    password: 'password'
                });
                expect(result).toEqual({
                    id: '1',
                    name: 'Clever Admin',
                    email: 'admin@clever.com',
                    role: 'admin'
                });
            });

            it('should trim and lowercase email inputs, allowing successful login', async () => {
                const result = await options.authorize({
                    email: ' Admin@clever.com  ', // Extra spaces and capitalized 'A'
                    password: 'password'
                });
                expect(result).toBeTruthy();
                expect(result.email).toBe('admin@clever.com');
            });

            it('should reject incorrect password', async () => {
                const result = await options.authorize({
                    email: 'admin@clever.com',
                    password: 'wrongpassword'
                });
                expect(result).toBeNull();
            });

            it('should reject incorrect email', async () => {
                const result = await options.authorize({
                    email: 'hacker@clever.com',
                    password: 'password'
                });
                expect(result).toBeNull();
            });

            it('should handle missing credentials gracefully', async () => {
                const result = await options.authorize();
                expect(result).toBeNull();
            });
        });
    });

    describe('Google Provider Configuration', () => {
        it('should enforce boolean return from signIn callback', async () => {
            const signInResultSuccess = await authOptions.callbacks.signIn({
                user: { email: 'user@clever.com' },
                account: { provider: 'google' }
            });
            expect(signInResultSuccess).toBe(true);

            const signInResultFail = await authOptions.callbacks.signIn({
                user: { email: 'user@gmail.com' },
                account: { provider: 'google' }
            });
            expect(signInResultFail).toBe(false);
        });

        it('should allow signIn for other providers (e.g. credentials) to pass directly', async () => {
            const signInResult = await authOptions.callbacks.signIn({
                account: { provider: 'credentials' }
            });
            expect(signInResult).toBe(true);
        });
    });

    describe('Session and JWT configurations', () => {
        it('should configure session behavior securely', () => {
            expect(authOptions.session.strategy).toBe('jwt');
            expect(authOptions.session.maxAge).toBeDefined();
            expect(typeof authOptions.session.maxAge).toBe('number');
        });

        it('should map role from user to token in jwt callback', async () => {
            const token = await authOptions.callbacks.jwt({
                token: { sub: '123' },
                user: { role: 'admin' }
            });
            expect(token.role).toBe('admin');
        });

        it('should retain existing token properties if user is not passed again', async () => {
            const token = await authOptions.callbacks.jwt({
                token: { sub: '123', role: 'admin' },
                user: undefined
            });
            expect(token.role).toBe('admin');
        });

        it('should map role from token to session object', async () => {
            const session = await authOptions.callbacks.session({
                session: { user: { name: 'Test User' } },
                token: { role: 'admin' }
            });
            expect(session.user.role).toBe('admin');
        });
    });

    describe('Security and Hardening', () => {
        it('should safely handle relative redirects', async () => {
            const result = await authOptions.callbacks.redirect({ url: '/dashboard', baseUrl: 'http://localhost:3000' });
            expect(result).toBe('http://localhost:3000/dashboard');
        });

        it('should safely handle same-origin absolute redirects', async () => {
            const result = await authOptions.callbacks.redirect({ url: 'http://localhost:3000/settings', baseUrl: 'http://localhost:3000' });
            expect(result).toBe('http://localhost:3000/settings');
        });

        it('should fallback to baseUrl for untrusted cross-origin redirects', async () => {
            const result = await authOptions.callbacks.redirect({ url: 'https://evil.com/phishing', baseUrl: 'http://localhost:3000' });
            expect(result).toBe('http://localhost:3000');
        });

        it('should bypass rate limiter when NODE_ENV is test', async () => {
            const credentialsProvider = authOptions.providers.find(p => p.name === 'Credentials' || p.options?.name === 'Credentials');
            const options = credentialsProvider.options || credentialsProvider;
            const originalEnv = process.env.NODE_ENV;
            process.env.NODE_ENV = 'test';

            // Should not throw even after 10 attempts
            for (let i = 0; i < 10; i++) {
                try {
                    await options.authorize({ email: 'wrong@clever.com', password: 'bad' }, { headers: {} });
                } catch (e) {
                    // Ignore normal rejections
                }
            }
            const result = await options.authorize({ email: 'admin@clever.com', password: 'password' }, { headers: {} });
            expect(result.email).toBe('admin@clever.com');
            process.env.NODE_ENV = originalEnv;
        });
    });
});
