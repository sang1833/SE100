import { useState, useEffect } from "react";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import officeImage from "/office.jpg";
import { GetSetting, UpdateSetting } from "@/apis/api_function";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface SettingInterface {
  company_name: string;
  company_code: string;
  start_time_hour: number;
  start_time_minute: number;
  salary_per_coef: number;
  payment_date: number;
}

const schema = yup.object().shape({
  company_name: yup.string().required(),
  company_code: yup.string().required(),
  start_time_hour: yup.number().required(),
  start_time_minute: yup.number().required(),
  salary_per_coef: yup.number().required(),
  payment_date: yup.number().required(),
});

const Setting = () => {
  const [disabled, setDisabled] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const getSetting = async () => {
      try {
        const res = await GetSetting();
        console.log("GetSetting", res.data);
        const result = res.data;
        // setValue({
        //   company_name: result.company_name,
        //   company_code: result.company_code,
        //   start_time_hour: result.start_time_hour,
        //   start_time_minute: result.start_time_minute,
        //   salary_per_coef: result.salary_per_coef,
        //   payment_date: result.payment_date,
        // });
        reset(result);
      } catch (error) {
        console.log(error);
      }
    };
    getSetting();
  }, []);

  async function Done(data: SettingInterface) {
    try {
      const res = await UpdateSetting(data);
      setDisabled(true);
      if (res.status === 200) {
        console.log(res.data);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="relative">
      <div className="w-full h-screen">
        <div className="border rounded-lg overflow-hidden">
          <img
            src={officeImage}
            alt="office"
            className="absolute object-cover w-full h-[21rem]"
          />
        </div>
      </div>
      <div className="h-screen w-full flex justify-center items-center z-99 absolute top-0">
        <div className="relative">
          <button
            className={`btn  hover:text-black absolute -mt-12 top-0 right-9  ${
              disabled ? "bg-tim-color text-white" : "text-black"
            }`}
            onClick={() => {
              setDisabled((prev) => !prev);
            }}
          >
            <p>{disabled ? "Edit" : "Cancel"}</p>
          </button>
          <form className="flex flex-col gap-4 justify-center items-center -mt-20 max-w-2xl p-8 bg-white border-double border-4 border-gray-400 rounded-lg">
            <fieldset disabled={disabled}>
              <section className="flex justify-between">
                <h1 className="font-bold text-2xl text-gray-900">Setting</h1>
              </section>
              <section className="mt-8 grid grid-cols-1 gap-4 max-w-xl">
                <div className="flex justify-between gap-2 items-center">
                  <p className="text-2xl">Company name: </p>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-[14rem]"
                    disabled={disabled}
                    {...register("company_name")}
                  />
                </div>
                <div className="flex justify-between gap-2 items-center">
                  <p className="text-2xl">Company code: </p>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-[14rem]"
                    disabled={disabled}
                    {...register("company_code")}
                  />
                </div>
                <div className="flex justify-between gap-2 items-center">
                  <p className="text-2xl">Start time hour: </p>
                  <input
                    type="number"
                    className="input input-bordered w-full max-w-[14rem]"
                    placeholder="Start time hour"
                    disabled={disabled}
                    {...register("start_time_hour")}
                  />
                </div>
                <div className="flex justify-between gap-2 items-center">
                  <p className="text-2xl">Start time minute: </p>
                  <input
                    type="number"
                    className="input input-bordered w-full max-w-[14rem]"
                    placeholder="Start time hour"
                    disabled={disabled}
                    {...register("start_time_minute")}
                  />
                </div>
                <div className="flex justify-between gap-2 items-center">
                  <p className="text-2xl">Salary per Coefficient: </p>
                  <input
                    type="number"
                    className="input input-bordered w-full max-w-[14rem]"
                    placeholder="Salary per Coefficient"
                    disabled={disabled}
                    {...register("salary_per_coef")}
                  />
                </div>
                <div className="flex justify-between gap-2 items-center">
                  <p className="text-2xl">Payment date: </p>
                  {/* <div className="relative input input-bordered w-full max-w-[14rem] flex justify-center items-center"> */}
                  {/* <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date as Date)}
                    disabled={disabled}
                  /> */}
                  <input
                    type="number"
                    className="input input-bordered w-full max-w-[14rem]"
                    placeholder="Salary Date"
                    disabled={disabled}
                    {...register("payment_date")}
                  />
                  {errors.payment_date && (
                    <p className="text-red-500">
                      {errors.payment_date.message}
                    </p>
                  )}
                  {/* <MdOutlineCalendarMonth className="absolute right-2 text-2xl" /> */}
                  {/* </div> */}
                </div>
              </section>
              <section className="flex justify-center mt-8 gap-4">
                <button
                  type="submit"
                  className="btn bg-tim-color hover:text-black text-white min-w-md"
                  disabled={disabled}
                  onClick={handleSubmit(Done)}
                >
                  <p>Save</p>
                </button>
              </section>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Setting;
