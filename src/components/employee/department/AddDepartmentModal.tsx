import { CreateDepartment } from "@/apis/api_function";
import { useState } from "react";
import { useDispatch } from "react-redux";
const AddDepartmentModal = () => {
  const dispatch = useDispatch();
  const [departmentName, setDepartmentName] = useState("");
  const [departmentCode, setDepartmentCode] = useState(""); // eslint-disable-line @typescript-eslint/no-unused-vars
  const [Loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (Loading) return;
    setLoading(true);
    try {
      const res = await CreateDepartment(departmentName, departmentCode);
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
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog
        id="add_department_modal"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add department</h3>
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex gap-1 items-center justify-between">
              <label htmlFor="">Department Name: </label>
              <input
                type="text"
                placeholder="Department name"
                className="input input-bordered w-full max-w-xs"
                value={departmentName}
                onChange={(e) => setDepartmentName(e.target.value)}
              />
            </div>
            <div className="flex gap-1 items-center justify-between">
              <label htmlFor="">Department Code: </label>
              <input
                type="text"
                placeholder="Department code"
                className="input input-bordered w-full max-w-xs"
                value={departmentCode}
                onChange={(e) => setDepartmentCode(e.target.value)}
              />
            </div>
            {/* <div className="flex gap-1 items-center justify-between">
              <label htmlFor="">Department Head: </label>
              <input
                type="text"
                placeholder="Department head"
                className="input input-bordered w-full max-w-xs"
              />
            </div> */}
            {/* <div className="flex flex-col">
              <div className="flex gap-1 items-center justify-between">
                <label htmlFor="">Employee: </label>
                <input
                  type="text"
                  placeholder="Employee"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </div> */}
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
                  disabled={Loading}
                >
                  {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    Loading && (
                      <span className="loading loading-infinity loading-md"></span>
                    )
                  }
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

export default AddDepartmentModal;
