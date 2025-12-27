import type { SecureUserRes } from "~/types/user-auth.type";
import { SECURITY_CONST } from "./app-constants";

export function setUserDataToLocalStorage(data: SecureUserRes) {
    if (typeof window !== "undefined") {
        localStorage.setItem(SECURITY_CONST.storageUserDataKeyName, JSON.stringify(data));
    }
}

export function getUserDataToLocalStorage() {
    if (typeof window !== "undefined") {
        const data = localStorage.getItem(SECURITY_CONST.storageUserDataKeyName);
        return data ? JSON.parse(data).data : null;
    }
}

export function cleanLocalStorage() {
    if (typeof window !== "undefined") {
        localStorage.removeItem(SECURITY_CONST.storageUserDataKeyName);
    }
}
