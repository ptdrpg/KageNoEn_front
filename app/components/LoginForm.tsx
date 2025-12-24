import { useState, type MouseEvent } from "react"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { useNavigate } from "react-router"
import { Button } from "./ui/button"

const LoginForm = () => {
  const [variant, setVariant] = useState<string>("Login");
  const navigate = useNavigate();

  const handleVariant = (variant: string) => {
    setVariant(variant);
  }

  const handleLogin = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/");
  }

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-[50px] p-[20%] bg-black-100 text-white">
      <p className="text-5xl font-bold text-emerald-400">{ variant }</p>
      <form className="w-full flex flex-col gap-[20px]">
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="usernmae">username</Label>
            <Input id="username" placeholder="username"/>
          </div>
        </div>
        {
          variant == "Register" ? <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="email">email</Label>
              <Input id="email" placeholder="email"/>
            </div>
          </div> : null
        }
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="password">password</Label>
            <Input id="password" placeholder="password"/>
          </div>
        </div>
        {
          variant == "Login" ? <p className="text-[12px] text-blue-400">don't have an account ? <span className="underline-offset-1 underline cursor-pointer" onClick={() => handleVariant("Register")}>create an account</span></p> : <p className="text-[12px] text-blue-400">Already have an account ? <span className="underline-offset-1 underline cursor-pointer" onClick={() => handleVariant("Login")}>login</span></p>
        }
        <Button type="submit" onClick={(e) => handleLogin(e)} className="bg-amber-500 text-white font-bold cursor-pointer text-[16px] hover:bg-emerald-400">{variant}</Button>
      </form>
    </div>
  )
}

export default LoginForm