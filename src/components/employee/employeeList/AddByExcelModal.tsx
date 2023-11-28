import { useState, useEffect } from "react";
import { ImportToExcel, GetDepartment } from "@/apis/api_function";
import { useDispatch } from "react-redux";

import { DepartmentType } from "../department/Department";

const AddByExcelModal = () => {
  const [file, setFile] = useState<File>();
  const dispatch = useDispatch();
  const [departments, setDepartments] = useState<DepartmentType[]>([]);
  const [department, setDepartment] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files?.[0]);
  };

  useEffect(() => {
    async function getDepartment() {
      const res = await GetDepartment();
      setDepartments(res.data.departments);
      // console.log("dp", res.data.departments);
    }
    getDepartment();
  }, []);

  async function Done() {
    if (loading) return;
    setLoading(true);
    if (department === "") {
      dispatch({
        type: "NOTIFY",
        payload: {
          type: "error",
          message: "Please choose a department",
        },
      });
      setLoading(false);
      return;
    }

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
      console.log("file", file);
      console.log("department", department);
      const Res = await ImportToExcel(file, department);
      if (Res.data.error) {
        dispatch({
          type: "NOTIFY",
          payload: {
            type: "error",
            message: Res.data.message,
          },
        });
        return;
      }

      const message = Res.data.message;
      const totalImported = message
        .split("Total users imported: ")[1]
        .split(" .")[0];
      const failedRows = message.split("Rows fail: ")[1];

      dispatch({
        type: "NOTIFY",
        payload: {
          type: "success",
          message: `Imported ${totalImported} employees`,
        },
      });

      if (failedRows !== "0") {
        dispatch({
          type: "NOTIFY",
          payload: {
            type: "error",
            message: `Failed to import row ${failedRows} employees`,
          },
        });
      }

      // click button close
      setLoading(false);
    } catch (error) {
      console.log(error);
      dispatch({
        type: "NOTIFY",
        payload: {
          type: "error",
          message: "Please check your input",
        },
      });
      setLoading(false);
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
            <div className="flex gap-1 items-center justify-between">
              <label htmlFor="">Department: </label>
              <div className="mx-2">
                <select
                  className="select select-bordered w-full max-w-xs"
                  onChange={(event) => setDepartment(event.target.value)}
                >
                  <option selected>Department</option>
                  {departments.map((department) => (
                    <option key={department._id} value={department._id}>
                      {department.departmentName}
                    </option>
                  ))}
                </select>
              </div>
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
