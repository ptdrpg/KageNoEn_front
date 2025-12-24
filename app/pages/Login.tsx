import bg from "~/assets/loginbg.jpg"
import LoginForm from "~/components/LoginForm"

const Login = () => {
  return (
    <div className="w-full h-screen grid grid-cols-5">
      <div className="col-span-3">
        <img src={bg} alt="background" className="w-full h-screen object-cover" />
      </div>
      <div className="col-span-2">
        <LoginForm />
      </div>
    </div>
  )
}

export default Login