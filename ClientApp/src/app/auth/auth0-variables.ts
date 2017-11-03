interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'CFJ2G3AaNwpMaJ1d9PkjgaKO08yFp8dU',
  domain: 'pca.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
