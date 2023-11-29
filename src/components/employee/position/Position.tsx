import AddPositionModal from "./AddPositionModal";
import ChangePositionModal from "./ChangePositionModal";
import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetPositionByDepartmentId } from "@/apis/api_function";
import { PositionRow } from "./PositionRow";
import { MdKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const positionArray = [
  {
    _id: 1,
    title: "...",
    departmentId: "...",
    coef: 2,
  },
];

const Position = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const departmentId = location.pathname.split("/")[3];
  const name = location.pathname.split("/")[2];
  const departmentName = name.replace(/%20/g, " ");
  const [showCreateModal, setShowCreateModal] = useState(false);

  const [positions, setPositions] = useState(positionArray);

  function showModal(type: string) {
    const modal = document.getElementById(type) as HTMLDialogElement;
    if (modal !== null) {
      modal.showModal();
    }
  }

  function ShowChangeModal() {
    setShowCreateModal(true);
    showModal("change_position_modal");
  }

  function ShowDeleteModal() {
    setShowCreateModal(true);
    showModal("delete_position_modal");
  }

  function closeModal() {
    setShowCreateModal(false);
  }

  useEffect(() => {
    async function getPosition() {
      const res = await GetPositionByDepartmentId(departmentId);
      console.log(res);
      setPositions(res.data.positions);
    }
    getPosition();
  }, [departmentId, showCreateModal]);

  if (name === "...") return <Navigate to="/employee/department" />;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-start">
        <button
          onClick={() => {
            navigate("/employee/department");
          }}
          className="flex btn btn-link items-center gap-2"
        >
          <MdKeyboardBackspace />
          <p>Back</p>
        </button>
      </div>
      <section className="flex justify-between mt-4">
        <h1 className="font-bold text-2xl text-gray-900 flex gap-2">
          <p>Positions in</p>
          <p>{departmentName}</p>
        </h1>
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
                <th>Coefficient</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* rows */}
              {positions.map((item, index) => (
                <PositionRow
                  key={item?._id}
                  item={item}
                  index={index}
                  ShowChangeModal={ShowChangeModal}
                  ShowDeleteModal={ShowDeleteModal}
                />
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <AddPositionModal departmentId={departmentId} closeModal={closeModal} />
      <ChangePositionModal />
    </div>
  );
};

export default Position;
