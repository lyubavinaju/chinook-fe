import type { LoginData } from "../model/LoginData";
import type { UserData } from "../model/UserData";

export default interface AuthService {
    login(loginData: LoginData): Promise<UserData>;
    logout(): Promise<void>;
}