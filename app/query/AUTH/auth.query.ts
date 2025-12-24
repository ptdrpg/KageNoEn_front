import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import type { dynamiqueLoginType, LoginType } from "~/types/user-auth.type";
import { AuthService } from "~/services/AUTH/auth-service";
import { toast } from "sonner";

const authService = new AuthService();

export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (login: LoginType) => authService.login(login.username, login.password),
    onSuccess: () => {
      navigate("/");
      toast.success("Login successful");
    },
    onError: () => {
      toast.error("Login failed");
    }
  })
}

export const useRegister = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (register: dynamiqueLoginType) => authService.register(register),
    onSuccess: () => {
      navigate("/");
      toast.success("Register successful");
    },
    onError: () => {
      toast.error("Register failed");
    }
  })
}

export const useLogout = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (id: string) => authService.logout(id),
    onSuccess: () => {
      navigate("/login");
    },
    onError: () => {
      toast.error("Logout failed");
    }
  })
}
  