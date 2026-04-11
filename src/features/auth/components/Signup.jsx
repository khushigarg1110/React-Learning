import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { login } from "../authSlice";
import { signupSchema } from "../schemas/authSchema";
import "./Auth.css";
import { useNavigate, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  function onSubmit(data) {
    console.log("Signup Data:", data);

    // ✅ Auto-login after signup
    dispatch(login(data));
    toast.success("User Registration Successful!");
    navigate("/products")
  }

  return (
    <div className="form-container">
      <h2>Signup</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <input type="text" placeholder="Name" {...register("name")} />
        {errors.name && <p className="error">{errors.name.message}</p>}

        {/* Email */}
        <input type="text" placeholder="Email" {...register("email")} />
        {errors.email && <p className="error">{errors.email.message}</p>}

        {/* Password */}
        <input type="password" placeholder="Password" {...register("password")} />
        {errors.password && <p className="error">{errors.password.message}</p>}

        <button type="submit">Signup</button>
      </form>
      <p style={{ textAlign: "center" }}>
        Already have an account?{" "}
        <button onClick={() => navigate("/login")}>
          Login
        </button>
      </p>
        </div>
  );
}

export default Signup;