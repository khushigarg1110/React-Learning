import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { login } from "../authSlice";
import { signupSchema } from "../schemas/authSchema";
import "./Auth.css";

function Signup() {
  const dispatch = useDispatch();

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
    </div>
  );
}

export default Signup;