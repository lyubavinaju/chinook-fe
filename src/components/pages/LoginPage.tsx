import React, { useState } from 'react'
import LoginForm from '../LoginForm'
import { useUserData } from '../../state-management/auth-store'
import type { LoginData } from '../../model/LoginData';
import authService from '../../services/AuthServiceImpl';
import type { UserData } from '../../model/UserData';
import { Navigate } from 'react-router-dom';
import type { AxiosError } from 'axios';
import { ROUTES_BY_ROLES } from '../../config/roles-config';

const LoginPage = () => {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);
  const setUserData = useUserData(s => s.setUserData);
  const role = useUserData(s=>s.role);
  if (role && !(role in ROUTES_BY_ROLES)) {
     throw Error(`Unknown role ${role}`);
  }
  const redirectTo = role && ROUTES_BY_ROLES[role as keyof typeof ROUTES_BY_ROLES]?.[0];
  const submitter = async (loginData: LoginData): Promise<string> => {
    let errorMessage = "";
    try {
      const userData: UserData = await authService.login(loginData);
      setUserData(userData);
      setLoggedIn(true);
    } catch (error) {
      errorMessage = (error as AxiosError).response?.data as string;
      if (!errorMessage) {
        errorMessage = "Network Error, repeate request later on"
      }
    }
    return errorMessage;
  }
  return (
    <>
      {isLoggedIn && redirectTo && <Navigate to={redirectTo} />}
      <LoginForm submitter={submitter}></LoginForm>
    </>
  )
}

export default LoginPage
