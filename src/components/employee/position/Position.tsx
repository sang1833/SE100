import { MdOutlineDeleteForever, MdOutlineEdit } from "react-icons/md";
import AddPositionModal from "./AddPositionModal";
import ChangePositionModal from "./ChangePositionModal";

const department = [
  {
    id: 1,
    title: "Manager",
    salaryCoefficient: 2,
    department: "IT Department",
  },
  {
    id: 2,
    title: "Accountant",
    salaryCoefficient: 3.1,
    department: "HR Department",
  },
  {
    id: 3,
    title: "Marketing",
    salaryCoefficient: 2,
    department: "Marketing Department",
  },
];

const Position = () => {
  function showModal(type: string) {
    const modal = document.getElementById(type) as HTMLDialogElement;
    if (modal !== null) {
      modal.showModal();
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <section className="flex justify-between mt-8">
        <h1 className="font-bold text-2xl text-gray-900">Positions</h1>
        <button
          className="btn bg-tim-color hover:text-black text-white"
          onClick={() => showModal("add_position_modal")}
        >
          <p>Add Positions</p>
        </button>
      </section>
      <section className="bg-white border rounded-lg">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Salary Coefficient</th>
                <th>Department</th>
                <th>Action</th>
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
                      onClick={() => showModal("change_position_modal")}
                    >
                      <MdOutlineEdit className="h-5 w-5" />
                    </button>
                    <button
                      className="btn btn-ghost btn-xs text-red-600 border border-red-600"
                      key={item.id}
                      onClick={() => showModal("delete_department_modal")}
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
      <AddPositionModal />
      <ChangePositionModal />
    </div>
  );
};

export default Position;
