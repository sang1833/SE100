import SettingTime from "@/components/setting/SettingTime";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdOutlineCalendarMonth } from "react-icons/md";
import officeImage from "/office.jpg";

const Setting = () => {
  const [value, onChange] = useState("10:00");
  const [startDate, setStartDate] = useState(new Date());

  return (
    <section className="relative">
      <div className="w-full h-screen">
        <div className="border rounded-lg overflow-hidden">
          <img
            src={officeImage}
            alt="office"
            className="absolute object-cover w-full h-full"
            style={{ filter: "blur(1px)" }}
          />
        </div>
      </div>
      <div className="h-screen w-full flex justify-center items-center z-99 absolute top-0">
        <div className="flex flex-col gap-4 justify-center items-center -mt-20 max-w-2xl p-8 bg-white border-double border-4 border-gray-400 rounded-lg">
          <section className="flex justify-between">
            <h1 className="font-bold text-2xl text-gray-900">Setting</h1>
          </section>
          <section className="mt-8 grid grid-cols-1 gap-4 max-w-xl">
            <div className="flex justify-between gap-2 items-center">
              <p className="text-2xl">Start time: </p>
              <div className="input input-bordered w-full max-w-[8rem] flex justify-center items-center">
                <SettingTime onChange={onChange} value={value} />
              </div>
            </div>
            <div className="flex justify-between gap-2 items-center">
              <p className="text-2xl">Salary per Coefficient: </p>
              <input
                type="number"
                className="input input-bordered w-full max-w-[14rem]"
                placeholder="Salary per Coefficient"
              />
            </div>
            <div className="flex justify-between gap-2 items-center">
              <p className="text-2xl">Payment date: </p>
              <div className="relative input input-bordered w-full max-w-[14rem] flex justify-center items-center">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date as Date)}
                />
                <MdOutlineCalendarMonth className="absolute right-2 text-2xl" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Setting;
