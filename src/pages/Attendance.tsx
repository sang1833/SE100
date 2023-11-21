import { useState } from "react";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

const Attendance = () => {
  const [value, onChangeValue] = useState("07:00");
  const [valueEnd, onChangeValueEnd] = useState("17:00");

  return (
    <div className="flex flex-col gap-4">
      <section className="flex justify-between mt-8">
        <h1 className="font-bold text-2xl text-gray-900">Attendance</h1>
        {/* <button className="btn bg-tim-color hover:text-black text-white">
          <p>Add Departments</p>
        </button> */}
      </section>
      <section className="flex gap-4">
        <div>
          <h1 className="text-xl m-2">Work start time: </h1>
          <div className="bg-white border border-gray-300 rounded-md p-2 max-w-[10.7rem]">
            <TimePicker
              onChange={(value) => onChangeValue(value?.toString() as string)}
              value={value}
              className="text-xl border-none"
            />
          </div>
        </div>
        <div>
          <h1 className="text-xl m-2">Work end time: </h1>
          <div className="bg-white border border-gray-300 rounded-md p-2 max-w-[10.7rem]">
            <TimePicker
              onChange={(value) =>
                onChangeValueEnd(value?.toString() as string)
              }
              value={valueEnd}
              className="text-xl border-none"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Attendance;
