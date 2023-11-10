import {
  MdOutlineSouth,
  MdOutlineNorth,
  MdOutlineLegendToggle,
} from "react-icons/md";

const salary = [
  {
    name: "Average",
    icon: <MdOutlineLegendToggle className="w-6 h-6 " />,
    value: 1000,
  },
  {
    name: "Min",
    icon: <MdOutlineSouth className="w-6 h-6 " />,
    value: 400,
  },
  {
    name: "Max",
    icon: <MdOutlineNorth className="w-6 h-6 " />,
    value: 1500,
  },
];

const Salary = () => {
  //   const [time, setTime] = useState("month");

  //   const handleTime = () => {
  //     setTime(time === "month" ? "year" : "month");
  //   };

  return (
    <div>
      <h3 className="text-lg font-semibold py-4">Salary by month</h3>
      {/* <details className="dropdown">
        <summary className="mb-2 btn btn-sm btn-outline">{time}</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li>
            <a>Month</a>
          </li>
          <li>
            <a>Year</a>
          </li>
        </ul>
      </details> */}
      <div className="flex flex-col gap-2">
        {salary.map((item) => (
          <div
            key={item.name}
            className="border rounded-lg flex justify-between items-center p-4 bg-gray-50"
          >
            <div className="flex gap-2">
              {item.icon}
              <h4>{item.name}:</h4>
            </div>
            <p className="text-sm text-gray-600">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Salary;
