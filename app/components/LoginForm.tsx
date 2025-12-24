import { useState, type MouseEvent } from "react"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { useNavigate } from "react-router"
import { Button } from "./ui/button"
import type { dynamiqueLoginType, LoginType } from "~/types/user-auth.type"
import { useLogin, useRegister } from "~/query/AUTH/auth.query"
import { useForm } from "react-hook-form"

const LoginForm = () => {
  const [variant, setVariant] = useState<string>("Login");
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm<dynamiqueLoginType>();

  const handleVariant = (variant: string) => {
    setVariant(variant);
    reset();
  }

  const { mutate:login } = useLogin();
  const { mutate: signup } = useRegister();

  const handleFormSubmit = (data: dynamiqueLoginType)=> {
    if (variant === "Login") {
      const logInput: LoginType = {
        username: data.username,
        password: data.password,
      }
      login(logInput)
    } else {
      signup(data);
    }
  }

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-[50px] p-[20%] bg-black-100 text-white">
      <p className="text-5xl font-bold text-emerald-400">{ variant }</p>
      <form className="w-full flex flex-col gap-[20px]" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="usernmae">username</Label>
            <Input id="username" placeholder="username" {...register("username")} />
          </div>
        </div>
        {
          variant == "Register" ? <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="email">email</Label>
              <Input id="email" placeholder="email" {...register("email")}/>
            </div>
          </div> : null
        }
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="password">password</Label>
            <Input id="password" placeholder="password" type="password" {...register("password")}/>
          </div>
        </div>
        {
          variant == "Login" ? <p className="text-[12px] text-blue-400">don't have an account ? <span className="underline-offset-1 underline cursor-pointer" onClick={() => handleVariant("Register")}>create an account</span></p> : <p className="text-[12px] text-blue-400">Already have an account ? <span className="underline-offset-1 underline cursor-pointer" onClick={() => handleVariant("Login")}>login</span></p>
        }
        <Button type="submit" className="bg-amber-500 text-white font-bold cursor-pointer text-[16px] hover:bg-emerald-400">{variant}</Button>
      </form>
    </div>
  )
}

export default LoginForm