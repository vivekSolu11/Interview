import Cookies from 'js-cookie';

/**
 * Check if the user is authenticated by looking for the auth token in cookies
 * @returns boolean indicating if the user is authenticated
 */
export const isAuthenticated = (): boolean => {
  return Cookies.get('auth_token') !== undefined;
};

/**
 * Get the auth token from cookies
 * @returns the auth token or undefined if not found
 */
export const getAuthToken = (): string | undefined => {
  return Cookies.get('auth_token');
};

/**
 * Set the auth token in cookies
 * @param token the auth token to set
 * @param expiresInDays number of days until the token expires
 */
export const setAuthToken = (token: string, expiresInDays: number = 7): void => {
  Cookies.set('auth_token', token, { expires: expiresInDays });
};

/**
 * Remove the auth token from cookies
 */
export const removeAuthToken = (): void => {
  Cookies.remove('auth_token');
}; 