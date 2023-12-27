import { RootState } from "@/store/store";
import { BsXCircle, BsClock } from "react-icons/bs";
import { MdChecklistRtl } from "react-icons/md";
import { useSelector } from "react-redux";

const Attendance = () => {
  const attendanceToday = useSelector(
    (state: RootState) => state.dashboard.data.employees_Today
  );
  const attendance = [
    {
      id: 1,
      name: "On time",
      icon: <MdChecklistRtl className="w-6 h-6 " />,
      number: attendanceToday.attendance,
    },
    {
      id: 2,
      name: "Late Coming",
      icon: <BsClock className="w-6 h-6 " />,
      number: attendanceToday.late,
    },
    {
      id: 3,
      name: "Absent",
      icon: <BsXCircle className="w-6 h-6 " />,
      number: attendanceToday.absent,
    },
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold py-4">Attendance Today</h3>
      <div className="grid grid-cols-1 gap-2">
        {attendance.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg flex justify-between gap-2 p-4 bg-gray-50"
          >
            <div className="flex gap-2">
              <div>{item.icon}</div>
              <h4>{item.name}</h4>
            </div>
            <h4>{item.number}</h4>
            {/* <p className="text-sm text-gray-600">{item.number}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attendance;
