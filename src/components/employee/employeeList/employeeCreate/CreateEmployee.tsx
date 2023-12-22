import { useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import { DateTimePicker } from "@/utils/DateTimePicker";
import DatePicker from "react-datepicker";
import { MdKeyboardBackspace } from "react-icons/md";

import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { uploadFirebaseImage } from "@/apis/firebase";

interface Employee {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
  age: string;
  gender: string;
}

// const employee: Employee = {
//   fullName: "John Doe",
//   email: "johndoe@example.com",
//   phoneNumber: "123-456-7890",
//   address: "1234 Main St",
//   age: "30",
//   gender: "Male",
// };

const schema = yup.object().shape({
  fullName: yup.string().required(),
  email: yup.string().email().required(),
  phoneNumber: yup.string().required(),
  address: yup.string().required(),
  age: yup.string().required(),
  gender: yup.string().required(),
});

const CreateEmployee = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const [startDate, setStartDate] = useState(new Date());
  const [file, setFile] = useState<File | undefined>(undefined); // file state
  const [image, setImage] = useState<string | undefined>(undefined);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setFile(file);
    if (file != null) {
      const reader = new FileReader();
      reader.onload = () => {
        const fileData = reader.result as string;
        setImage(fileData);
      };
      reader.readAsDataURL(file);
    }
  };

  async function submitImage() {
    // handle submitting the form
    console.log("file", file);
    if (file == null) {
      console.log("null");
      return;
    }
    try {
      const url = await uploadFirebaseImage(file);
      console.log("url", url);
    } catch (error) {
      console.log(error);
    }
  }

  async function submit(data: Employee) {
    // handle submitting the form
    console.log("data", data);

    // try {
    //   if (file == null) {
    //     console.log("null");
    //     return;
    //   }
    //   const url = await uploadFirebaseImage(file);
    //   console.log("url", url);
    // } catch (error) {
    //   console.log(error);
    // }
    // if (errors) {
    //   alert("Please check your input");
    // }
  }

  return (
    <div>
      <button
        onClick={() => {
          navigate("/employee/list");
        }}
        className="flex btn btn-link items-center gap-2"
      >
        <MdKeyboardBackspace />
        <p>Back</p>
      </button>
      <section className="mt-4">
        <h1 className="font-bold text-2xl text-gray-900 mb-4">
          Create Employee
        </h1>
        <div className="flex justify-between bg-white border rounded-md max-w-[80rem]">
          <form className="p-4" onSubmit={handleSubmit(submit)}>
            <div className="flex justify-between">
              <div className="grid grid-cols-2 gap-2">
                <div className="grid grid-cols-2 items-center">
                  <span className="font-bold">Name:</span>
                  <input
                    type="text"
                    placeholder="Position"
                    className="input input-bordered"
                    {...register("fullName")}
                  />
                  {errors.fullName && (
                    <p className="text-do-color text-sm mt-2">
                      Your password must be at least 6 characters as well.
                    </p>
                  )}
                </div>
                <div className="grid grid-cols-2 items-center">
                  <span className="font-bold">Email:</span>
                  <input
                    type="text"
                    placeholder="Email"
                    className="input input-bordered"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-do-color text-sm mt-2">
                      Your password must be at least 6 characters as well.
                    </p>
                  )}
                </div>
                <div className="grid grid-cols-2 items-center">
                  <span className="font-bold">Phone:</span>
                  <input
                    type="text"
                    placeholder="Phone"
                    className="input input-bordered"
                    {...register("phoneNumber")}
                  />
                  {errors.phoneNumber && (
                    <p className="text-do-color text-sm mt-2">
                      Your password must be at least 6 characters as well.
                    </p>
                  )}
                </div>
                <div className="grid grid-cols-2 items-center">
                  <span className="font-bold">Date of Birth:</span>
                  {/* <input
                      type="text"
                      placeholder="Date of Birth"
                      className="input input-bordered"
                      value={employee.dateOfBirth}
                    /> */}

                  <div className="border border-gray-300 rounded-md p-2">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date as Date)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 items-center">
                  <span className="font-bold">Address:</span>
                  <input
                    type="text"
                    placeholder="Address"
                    className="input input-bordered"
                    {...register("address")}
                  />
                  {errors.address && (
                    <p className="text-do-color text-sm mt-2">
                      Your password must be at least 6 characters as well.
                    </p>
                  )}
                </div>
                <div className="grid grid-cols-2 items-center">
                  <span className="font-bold">Age:</span>
                  <input
                    type="text"
                    placeholder="Age"
                    className="input input-bordered"
                    {...register("age")}
                  />
                  {errors.age && (
                    <p className="text-do-color text-sm mt-2">
                      Your password must be at least 6 characters as well.
                    </p>
                  )}
                </div>
              </div>
              {/* avatar */}
              <div className="min-w-[10rem]">
                <div className="flex flex-col gap-2 p-4 mx-4 ">
                  <div className="flex items-center justify-center">
                    <img
                      src={image}
                      alt="man"
                      className="h-[6rem] w-[6rem] rounded-full border border-gray-500 p-2"
                    />
                  </div>
                  <input
                    type="file"
                    className="file-input w-full max-w-xs"
                    onChange={handleFileChange}
                    multiple
                    accept="image/*"
                  />
                </div>
                <div className="grid grid-cols-2 items-center mx-2">
                  <span className="font-bold">Gender:</span>
                  <select className="input input-bordered">
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mt-4">
              <button
                className="btn bg-tim-color text-white hover:text-black"
                type="submit"
                onClick={submitImage}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CreateEmployee;
