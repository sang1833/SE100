import { UpdateDepartment } from "@/apis/api_function";
import { MouseEvent, useState } from "react";
import { useDispatch } from "react-redux";

interface ChangeDepartmentModalProps {
  name: string;
  id: string;
}

const ChangeDepartmentModal = ({ name, id }: ChangeDepartmentModalProps) => {
  const dispatch = useDispatch();
  const [departmentName, setDepartmentName] = useState(name);
  const [departmentCode, setDepartmentCode] = useState(""); // eslint-disable-line @typescript-eslint/no-unused-vars
  const [Loading, setLoading] = useState(false);

  async function handleSubmit(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (Loading) return;
    setLoading(true);
    try {
      const res = await UpdateDepartment(id, departmentName, departmentCode);
      dispatch({
        type: "NOTIFY",
        payload: {
          type: "success",
          message: res.data.message,
        },
      });
      console.log(res);
      setLoading(false);
      window.location.reload();
      document.getElementById("btn-close")?.click();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      dispatch({
        type: "NOTIFY",
        payload: {
          type: "error",
          message: error.response.data.message,
        },
      });
      setLoading(false);
      window.location.reload();
      document.getElementById("btn-close")?.click();
    }
  }

  return (
    <div>
      <dialog
        id="change_department_modal"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Change department</h3>
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex gap-1 items-center justify-between">
              <label htmlFor="">Department Name: </label>
              <input
                type="text"
                placeholder="Department name"
                value={departmentName}
                onChange={(e) => setDepartmentName(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="flex gap-1 items-center justify-between">
              <label htmlFor="">Department Code: </label>
              <input
                type="text"
                placeholder="Department code"
                value={departmentCode}
                onChange={(e) => setDepartmentCode(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="modal-action flex justify-center">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <div className="flex justify-center gap-1">
                <button className="btn btn-error">Close</button>
                <button
                  className="btn bg-tim-color text-white hover:text-black"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ChangeDepartmentModal;
