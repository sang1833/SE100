import { MdOutlineMoreVert } from "react-icons/md";

const department = [
  {
    id: 1,
    title: "Nguyen Van A",
    salaryCoefficient: "22-11-2023",
    department: "Absent",
  },
  {
    id: 2,
    title: "Nguyen Van B",
    salaryCoefficient: "22-11-2023",
    department: "Present",
  },
  {
    id: 3,
    title: "Nguyen Van C",
    salaryCoefficient: "22-11-2023",
    department: "Present",
  },
];

export const AttendanceTable = () => {
  return (
    <div>
      <section>
        <div className="flex justify-start items-center mb-2">
          <p>Filter by:</p>
          <div className="mx-2">
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Department
              </option>
              <option>IT</option>
              <option>Marketing</option>
            </select>
          </div>
          <div>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Time
              </option>
              <option>Oldest</option>
              <option>Newest</option>
            </select>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex gap-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
              />
              <span className="ml-2 text-gray-700">Present</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
              />
              <span className="ml-2 text-gray-700">Absent</span>
            </label>
          </div>
          <div className="flex gap-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
              />
              <span className="ml-2 text-gray-700">Late</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600"
              />
              <span className="ml-2 text-gray-700">Overtime</span>
            </label>
          </div>
        </div>
        <div className="my-2">
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Date
            </option>
            <option>21-11-2023</option>
            <option>22-11-2023</option>
          </select>
        </div>
      </section>

      <section className="bg-white border rounded-lg">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Time</th>
                <th>State</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              {/* rows */}
              {department.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.salaryCoefficient}</td>
                  <td>{item.department}</td>
                  <th className="flex gap-1">
                    <button
                      className="btn btn-ghost btn-xs border border-gray-600"
                      key={item.id}
                    >
                      <MdOutlineMoreVert className="h-5 w-5" />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
