import {
  MdOutlineDeleteForever,
  MdOutlineEdit,
  MdOutlineMore,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

{
  /* avatar, name, position, coefficient, day of work, bonus/ pelnalty, salary */
}

interface TableInfo {
  id: number;
  avatar: string;
  name: string;
  position: string;
  coefficient: string;
  dayOfWork: string;
  bonus: string;
  salary: string;
}

const payrollArray = [
  {
    id: 1,
    avatar: "https://i.pravatar.cc/300",
    name: "Nguyen Van A",
    position: "Software Engineer",
    coefficient: "1.0",
    dayOfWork: "20",
    bonus: "0",
    salary: "1.000.000",
  },
  {
    id: 2,
    avatar: "https://i.pravatar.cc/300",
    name: "Nguyen Van B",
    position: "Software Engineer",
    coefficient: "1.0",
    dayOfWork: "20",
    bonus: "0",
    salary: "1.000.000",
  },
  {
    id: 3,
    avatar: "https://i.pravatar.cc/300",
    name: "Nguyen Van C",
    position: "Software Engineer",
    coefficient: "1.0",
    dayOfWork: "20",
    bonus: "0",
    salary: "1.000.000",
  },
];

const EmployeeList = () => {
  const navigate = useNavigate();
  const [payroll, setPayroll] = useState<TableInfo[]>(payrollArray);

  useEffect(() => {
    async function getEmployee() {
      setPayroll(payrollArray);
    }
    getEmployee();
  }, []);

  function showModal(type: string) {
    const modal = document.getElementById(type) as HTMLDialogElement;
    if (modal !== null) {
      modal.showModal();
    }
  }

  return (
    <div className="flex flex-col gap-4">
      {/* <section className="flex justify-between mt-8">
        <h1 className="font-bold text-2xl text-gray-900">Employees</h1>

        <div className="flex justify-center">
          <button
            className="btn bg-tim-color hover:text-black text-white"
            onClick={() => navigate("/employee/create")}
          >
            <p>Add Employees</p>
          </button>
        </div>
      </section> */}
      <section className="bg-white border rounded-lg">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                {/* avatar, name, position, coefficient, day of work, bonus/ pelnalty, salary */}
                <th>#</th>
                <th>Avatar</th>
                <th>Name</th>
                <th>Position</th>
                <th>Coefficient</th>
                <th>Day of work</th>
                <th>Bonus/ Penalty</th>
                <th>Salary</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* rows */}
              {payroll.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <img
                          src={
                            item.avatar && item.avatar !== "string"
                              ? item.avatar
                              : "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
                          }
                          alt="avatar"
                        />
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.position}</td>
                  <td>{item.coefficient}</td>
                  <td>{item.dayOfWork}</td>
                  <td>{item.bonus}</td>
                  <td>{item.salary}</td>

                  <th className="flex gap-1">
                    <button
                      className="btn btn-ghost btn-xs border text-green-800 border-green-800"
                      key={item.id}
                      onClick={() => navigate(`/employee/${item.id}`)}
                    >
                      <MdOutlineMore className="h-5 w-5" />
                    </button>
                    <button
                      className="btn btn-ghost btn-xs border text-tim-color border-tim-color-1"
                      key={item.id}
                      onClick={() => navigate(`/employee/${item.id}`)}
                    >
                      <MdOutlineEdit className="h-5 w-5" />
                    </button>
                    <button
                      className="btn btn-ghost btn-xs text-red-600 border border-red-600"
                      key={item.id}
                      onClick={() => showModal("delete_profile_modal")}
                    >
                      <MdOutlineDeleteForever className="h-5 w-5" />
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

export default EmployeeList;
