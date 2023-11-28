const ChangeDepartmentModal = () => {
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
                className="input input-bordered w-full max-w-xs"
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
                <button className="btn bg-tim-color text-white hover:text-black">
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
