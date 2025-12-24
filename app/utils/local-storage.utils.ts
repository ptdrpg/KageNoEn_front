import type { SecureUserRes } from "~/types/user-auth.type";
import { SECURITY_CONST } from "./app-constants";

export function setUserDataToLocalStorage(data: SecureUserRes) {
    localStorage.setItem(SECURITY_CONST.storageUserDataKeyName, JSON.stringify(data));
}