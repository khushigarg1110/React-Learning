import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { login } from "../authSlice";
import { loginSchema } from "../schemas/authSchema";
import "./Auth.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  function onSubmit(data) {
    console.log("Login Data:", data);

    // ✅ Redux login
    dispatch(login(data));
    toast.success("Login Successful!");
    navigate("/products");
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
      <p style={{ textAlign: "center" }}>
        Don't have an account?{" "}
        <button onClick={() => navigate("/signup")}>
          Signup
        </button>
      </p>
    </div>
  );
}

export default Login;