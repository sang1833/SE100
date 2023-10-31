import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

interface FormValues {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
});

export default function Login() {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  function woosalSubmit(data: FormValues) {
    // handle submitting the form
    console.log(data);
    navigate("/home/dashboard");
  }

  function togglePasswordVisibility(
    event: React.MouseEvent<HTMLButtonElement>
  ) {
    event.preventDefault();
    setPasswordVisible(!passwordVisible);
  }

  return (
    <div>
      <div>
        <form
          // onSubmit={handleSubmit(woosalSubmit)}
          className="max-w-md mx-auto md:mt-[100px] sm:shadow-2xl p-16 rounded-xl"
        >
          <h1 className="text-3xl font-bold text-center my-6">Login</h1>
          <div className="mb-4">
            <label
              htmlFor="email"
              className={`block font-bold text-sm mb-2 ${
                errors.email ? "text-secondary-1" : "text-black"
              }`}
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="hey@chrisoncode.io"
              className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-primary-0 ${
                errors.email
                  ? "text-secondary-1 border-secondary-1"
                  : "text-black border-primary-0"
              }`}
              {...register("email")}
            />
            {errors.email && (
              <p className="text-secondary-1 text-sm mt-2">
                A valid email is required.
              </p>
            )}
          </div>

          <div className="mb-8">
            <label
              htmlFor="password"
              className={`block font-bold text-sm mb-2 ${
                errors.password ? "text-secondary-1" : "text-black"
              }`}
            >
              Password
            </label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="superduperpassword"
                className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4 text-black placeholder-primary-0 ${
                  errors.password ? "border-secondary-1" : "border-primary-0"
                }`}
                {...register("password")}
              />
              <button
                className="absolute bg-transparent border-none top-0 right-0 mr-3 my-1 text-gray-600 hover:text-gray-800"
                onClick={togglePasswordVisibility}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className={`w-6 h-6 ${passwordVisible ? "" : "hidden"}`}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className={`w-6 h-6 ${passwordVisible ? "hidden" : ""}`}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              </button>
            </div>
            {errors.password && (
              <p className="text-secondary-1 text-sm mt-2">
                Your password is required.
              </p>
            )}
          </div>

          <button
            type="submit"
            onClick={handleSubmit(woosalSubmit)}
            className="btn w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
