import type { dynamiqueLoginType, logoutType, SecureUserRes } from "~/types/user-auth.type";
import { SECURITY_CONST } from "~/utils/app-constants";
import { apiService } from "../custom-axios";
import { setUserDataToLocalStorage } from "~/utils/local-storage.utils";
import { toast } from "sonner";

export class AuthService {
  login = async (username: string, password: string): Promise<SecureUserRes> => {
    const response = await apiService.post(SECURITY_CONST.loginEndpoint, {
      username,
      password,
    });

    if (response.status === 200) {
      setUserDataToLocalStorage(response.data)
    }

    return response.data;
  };

  register = async (data: dynamiqueLoginType): Promise<SecureUserRes> => {
    const response = await apiService.post(SECURITY_CONST.registerEndpoint, data);

    if (response.status === 201) {
      setUserDataToLocalStorage(response.data)
    }

    return response.data;
  };

  logout = async (): Promise<logoutType> => {
    const response = await apiService.post(SECURITY_CONST.logoutEndpoint);
    toast.success(response.data.message);
    return response.data;
  };
}