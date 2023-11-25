import { useState } from "react";

const AddByExcelModal = () => {
  const [file, setFile] = useState<File>();

  const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files?.[0]);
  };

  function Done() {
    try {
      console.log(file);
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
