import { BsXCircle, BsClock } from "react-icons/bs";
import { MdOutlineLocalHotel, MdChecklistRtl } from "react-icons/md";

const attendance = [
  {
    id: 1,
    name: "Attendance",
    icon: <MdChecklistRtl className="w-6 h-6 " />,
    number: 400,
  },
  {
    id: 2,
    name: "Late Coming",
    icon: <BsClock className="w-6 h-6 " />,
    number: 400,
  },
  {
    id: 3,
    name: "Absent",
    icon: <BsXCircle className="w-6 h-6 " />,
    number: 400,
  },
  {
    id: 4,
    name: "Leave Apply",
    icon: <MdOutlineLocalHotel className="w-6 h-6 " />,
    number: 14,
  },
];

const Attendance = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold py-4">Employees Today</h3>
      <div className="grid grid-cols-2 gap-2">
        {attendance.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg flex flex-col p-4 bg-gray-50"
          >
            {item.icon}
            <h4>{item.name}</h4>
            <p className="text-sm text-gray-600">{item.number}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attendance;
