export interface IAuthService {
  signIn: (email: string, password: string) => any;
}

export const AuthService = Symbol.for('AuthService');
