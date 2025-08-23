const TOKEN_KEY = 'accessToken';

export const saveToken = (token: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(TOKEN_KEY, token);
  }
};

export const getToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(TOKEN_KEY);
  }
  return null;
};

export const removeToken = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(TOKEN_KEY);
  }
};

export const extractTokenFromUrl = (): string | null => {
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    
    if (token) {
      saveToken(token);
      
      // 토큰 파라미터를 제거하여 URL 정리
      window.history.replaceState({}, document.title, window.location.pathname);
      
      return token;
    }
  }
  return null;
};

export const isAuthenticated = (): boolean => {
  return getToken() !== null;
};