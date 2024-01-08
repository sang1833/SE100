// import {
//   MdOutlineDeleteForever,
//   MdOutlineEdit,
//   MdOutlineMore,
// } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
import { PayrollInterface } from "./PayrollTable";

interface PayrollListInterface {
  payrolls: PayrollInterface[];
}

const EmployeeList = ({ payrolls }: PayrollListInterface) => {
  // const navigate = useNavigate();

  // function showModal(type: string) {
  //   const modal = document.getElementById(type) as HTMLDialogElement;
  //   if (modal !== null) {
  //     modal.showModal();
  //   }
  // }

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
                {/* avatar, name, position, coefficient, day of work, bonus_penalty/ pelnalty, salary */}
                <th>#</th>
                <th>Avatar</th>
                <th>Name</th>
                <th>Position</th>
                <th>Coefficient</th>
                <th>Day of work</th>
                <th>bonus_penalty/ Penalty</th>
                <th>Salary</th>
                {/* <th>Action</th> */}
              </tr>
            </thead>
            <tbody>
              {/* rows */}
              {payrolls?.map((item, index) => (
                <tr key={index}>
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
                  <td>{item.day_of_work}</td>
                  <td>{item.bonus_penalty}</td>
                  <td>{item.salary}</td>

                  {/* <th className="flex gap-1">
                    <button
                      className="btn btn-ghost btn-xs border text-green-800 border-green-800"
                      onClick={() => navigate(`/employee/${item.employee_ID}`)}
                    >
                      <MdOutlineMore className="h-5 w-5" />
                    </button>
                    <button
                      className="btn btn-ghost btn-xs border text-tim-color border-tim-color-1"
                      onClick={() => navigate(`/employee/${item.employee_ID}`)}
                    >
                      <MdOutlineEdit className="h-5 w-5" />
                    </button>
                    <button
                      className="btn btn-ghost btn-xs text-red-600 border border-red-600"
                      onClick={() => showModal("delete_profile_modal")}
                    >
                      <MdOutlineDeleteForever className="h-5 w-5" />
                    </button>
                  </th> */}
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
