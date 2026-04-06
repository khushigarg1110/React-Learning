import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schemas/authSchema";
import "./Auth.css";

function Login({ setIsAuthenticated }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  function onSubmit(data) {
    console.log("Login Data:", data);
    setIsAuthenticated(true); // simulate login
  }

  return (
    <div className="form-container">
      <h2>Login</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Email" {...register("email")} />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <input type="password" placeholder="Password" {...register("password")} />
        {errors.password && <p className="error">{errors.password.message}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;