import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

interface IAttendanceTime {
  value: string;
  onChangeValue: (value: string) => void;
  valueEnd: string;
  onChangeValueEnd: (value: string) => void;
}

export const AttendanceTime = ({
  value,
  onChangeValue,
  valueEnd,
  onChangeValueEnd,
}: IAttendanceTime) => {
  return (
    <section className="flex gap-4">
      <div className="flex">
        <h1 className="text-xl m-2">Work start time: </h1>
        <div className="bg-white border border-gray-300 rounded-md p-2 max-w-[10.7rem]">
          <TimePicker
            onChange={(value) => onChangeValue(value?.toString() as string)}
            value={value}
            className="text-xl border-none"
          />
        </div>
      </div>
      <div className="flex">
        <h1 className="text-xl m-2">Work end time: </h1>
        <div className="bg-white border border-gray-300 rounded-md p-2 max-w-[10.7rem]">
          <TimePicker
            onChange={(value) => onChangeValueEnd(value?.toString() as string)}
            value={valueEnd}
            className="text-xl border-none"
          />
        </div>
      </div>
    </section>
  );
};
