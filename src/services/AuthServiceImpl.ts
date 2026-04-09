import axios from "axios";
import type { LoginData } from "../model/LoginData";
import type { UserData } from "../model/UserData";
import type AuthService from "./AuthService";
import apiClient from "./ApiClientImpl";
const axiosInstance = axios.create({
    baseURL: "http://localhost:3000"
})
class AuthServiceImpl implements AuthService {
    async login(loginData: LoginData): Promise<UserData> {
        const resp = await axiosInstance.post<UserData & {token: string}>("/accounts/login", loginData);
        const user = resp.data;
        apiClient.setAuth(user.token);
        return {username: user.username, role: user.role};
    }
    async logout(): Promise<void> {
        apiClient.resetAuth();
        return Promise.resolve();
    }

}

const authService: AuthService = new AuthServiceImpl();
export default authService;