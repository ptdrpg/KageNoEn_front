import type { SecureUserRes } from "~/types/user-auth.type";
import { SECURITY_CONST } from "./app-constants";

export function setUserDataToLocalStorage(data: SecureUserRes) {
    localStorage.setItem(SECURITY_CONST.storageUserDataKeyName, JSON.stringify(data));
}

export function getUserDataToLocalStorage() {
    const data = localStorage.getItem(SECURITY_CONST.storageUserDataKeyName);
    return data ? JSON.parse(data).data : null;
}

export function cleanLocalStorage() {
    localStorage.removeItem(SECURITY_CONST.storageUserDataKeyName);
}