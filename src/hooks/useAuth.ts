import { useCallback, useEffect, useRef } from 'react';
import { create } from 'zustand';
import cookie from 'js-cookie';
import * as Jwt from 'jsonwebtoken';
import { useNavigate } from 'react-router-dom';

interface AuthTokenInfo {
  _id: string;
  issuedOn: number;
  expiredOn: number;
  email: string;
}

interface AuthState {
  loading: boolean;
  isAuthenticated: boolean;
  expiredOn?: number;
  token?: string;
  authInfo?: AuthTokenInfo;
}

const useAuthStore = create<AuthState>(() => ({
  loading: true,
  isAuthenticated: false,
  expiredOn: undefined,
  token: undefined,
  authInfo: undefined,
}));

export function useAuth() {
  const loading = useAuthStore((state) => state.loading);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const authInfo = useAuthStore((state) => state.authInfo);
  const navigate = useNavigate();
  const routerRef = useRef(navigate);

  routerRef.current = navigate;

  const logout = useCallback(() => {
    cookie.remove('token');
    useAuthStore.setState({
      isAuthenticated: false,
      expiredOn: undefined,
      token: undefined,
      authInfo: undefined,
    });
    routerRef.current('/connect', { replace: true });
  }, []);

  const login = useCallback(
    async ({
      username,
      password,
    }: {
      username: string;
      password: string;
    }): Promise<{
      success: boolean;
      message?: string;
    }> => {
      // Login logic here

      console.log(username, 'username');
      console.log(password, 'password');

      const result = {
        success: true,
        data: { token: 'token from backend' },
      };

      if (result.success) {
        updateAuthState(result.data.token);
      }

      return result;
    },
    [],
  );

  return { loading, isAuthenticated, logout, login, authInfo };
}

function updateAuthState(token: string | undefined) {
  if (token) {
    try {
      const tokenInfo = Jwt.decode(token, {}) as AuthTokenInfo;
      const expiredOn = tokenInfo?.expiredOn;

      if (expiredOn && expiredOn > Date.now()) {
        useAuthStore.setState({
          isAuthenticated: true,
          expiredOn,
          token,
          authInfo: tokenInfo,
        });
        // init other user data
      } else {
        cookie.remove('token');
      }
    } catch (error) {}
  } else {
    useAuthStore.setState({
      isAuthenticated: false,
      expiredOn: undefined,
      token: undefined,
      authInfo: undefined,
    });
  }
}

// use this hook to bootstrap the auth state

export function useAuthBootstrap() {
  const tokenRef = useRef<string | undefined>(undefined);

  useEffect(() => {
    const interval = setInterval(() => {
      const token = cookie.get('token');

      if (tokenRef.current === token) {
        return;
      }

      tokenRef.current = token;
      updateAuthState(token);
    }, 10000);

    updateAuthState(cookie.get('token'));
    useAuthStore.setState({ loading: false });

    return () => clearInterval(interval);
  }, []);
}
