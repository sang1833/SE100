import { useRef, useState } from "react";
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
                className="absolute top-0 right-0 mr-3 mt-3 text-gray-600 hover:text-gray-800"
                onClick={togglePasswordVisibility}
              >
                <svg
                  className="h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    className={passwordVisible ? "hidden" : ""}
                    id="hide-icon"
                    d="M12 4C7.03 4 2.81 6.64.34 11c2.47 4.36 6.69 7 11.66 7s9.19-2.64 11.66-7c-2.47-4.36-6.69-7-11.66-7zm0 12c-2.5 0-4.81-1.19-6.23-3.17.42-.52.86-1.04 1.33-1.55.77-.83 1.58-1.68 2.4-2.56.82.88 1.63 1.73 2.4 2.56.47.51.91 1.03 1.33 1.55C16.81 14.81 14.5 16 12 16z"
                  />
                  <path
                    className={passwordVisible ? "" : "hidden"}
                    id="show-icon"
                    d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm0-6c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"
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
            className="block mx-auto bg-primary-0 rounded shadow py-2 px-5 text-sm text-white border-1 border-primary-0"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
