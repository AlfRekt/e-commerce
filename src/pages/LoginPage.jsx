import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../store/actions/clientActions";
import FormInput from "../components/FormInput";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { email, password, remember } = data;

    return dispatch(loginUser({ email, password }))
      .then((userData) => {
        if (remember) {
          localStorage.setItem("token", userData.token);
          localStorage.setItem("user", JSON.stringify(userData));
        } else {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }

        if (window.history.length > 2) navigate(-1);
        else navigate("/");
      })
      .catch(() => {
        toast.error("Invalid email or password. Please try again.");
      });
  };

  return (
    <div className="mx-auto max-w-md px-6 py-12">
      <h1 className="mb-8 text-center text-3xl font-bold text-[#252B42]">Login</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <FormInput
          label="Email" name="email" type="email" register={register} error={errors.email}
          rules={{
            required: "Email is required",
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" },
          }}
        />

        <FormInput
          label="Password" name="password" type="password" register={register} error={errors.password}
          rules={{ required: "Password is required" }}
        />

        {/* Remember me */}
        <label className="flex items-center gap-2 text-sm text-[#737373]">
          <input type="checkbox" {...register("remember")} className="h-4 w-4" />
          Remember me
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 flex items-center justify-center gap-2 rounded bg-[#23A6F0] px-6 py-3 font-bold text-white transition hover:bg-[#1a8fd1] disabled:opacity-60"
        >
          {isSubmitting && (
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
          )}
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default LoginPage;