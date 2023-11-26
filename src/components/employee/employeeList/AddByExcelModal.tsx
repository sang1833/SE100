import { useState } from "react";
import { ImportUser } from "@/apis/api_function";
import { useDispatch } from "react-redux";

const AddByExcelModal = () => {
  const [file, setFile] = useState<File>();
  const dispatch = useDispatch();

  const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files?.[0]);
  };

  async function Done() {
    try {
      if (file === undefined) {
        dispatch({
          type: "NOTIFY",
          payload: {
            type: "error",
            message: "Please choose a file",
          },
        });
        return;
      }
      const Res = await ImportUser(file);
      dispatch({
        type: "NOTIFY",
        payload: {
          type: "success",
          message: Res.data.message,
        },
      });
      // click button close
      document.getElementById("btn-close")?.click();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="add_excel" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add employees by excel</h3>
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex gap-1 items-center justify-between">
              <label htmlFor="">Position Title: </label>
              <input
                type="file"
                className="file-input w-full max-w-xs"
                onChange={handleFile}
                accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
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
                  onClick={Done}
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

export default AddByExcelModal;
