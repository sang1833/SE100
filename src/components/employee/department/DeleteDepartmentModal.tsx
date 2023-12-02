import { DeleteDepartment } from "@/apis/api_function";
import { useState } from "react";
import { useDispatch } from "react-redux";

interface DeleteDepartmentModalProps {
  code: string;
}

const DeleteDepartmentModal = ({ code }: DeleteDepartmentModalProps) => {
  const dispatch = useDispatch();
  const [Loading, setLoading] = useState(false);

  async function handleSubmitDelete() {
    if (Loading) return;
    setLoading(true);
    try {
      console.log("code", code);
      const res = await DeleteDepartment(code);
      dispatch({
        type: "NOTIFY",
        payload: {
          type: "success",
          message: res.data.message,
        },
      });
      console.log(res);
      setLoading(false);
      // window.location.reload();
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
      // window.location.reload();
      document.getElementById("btn-close")?.click();
    }
  }

  return (
    <div>
      <dialog
        id="delete_department_modal"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Delete Department</h3>
          <div>
            <h3>Are you sure?</h3>
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
                <button className="btn">No</button>
                <button
                  className="btn btn-error text-white hover:text-black"
                  onClick={handleSubmitDelete}
                >
                  Yes
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default DeleteDepartmentModal;
