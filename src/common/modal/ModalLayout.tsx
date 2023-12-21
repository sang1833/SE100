import { useState } from "react";
import { MODAL_BODY_TYPES } from "@/utils/globalConstantUtil";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "@/store/reducers/modalSlice";
import { RootState } from "@/store/store";
import AddDepartModalBody from "./addModal/AddDepartModalBody";
// import ConfirmationModalBody from "../features/common/components/ConfirmationModalBody";

function ModalLayout() {
  const { isOpen, bodyType, size, extraObject, title } = useSelector(
    (state: RootState) => state.modal
  );
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const close = () => {
    dispatch(closeModal());
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      close();
    }, 1000);
  };

  return (
    <>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      {isOpen && (
        <dialog
          id="add_department_modal"
          className="modal modal-bottom sm:modal-middle"
        >
          <div className={`modal-box ${size ? "lg" : "max-w-3xl"}`}>
            <h3 className="font-bold text-lg">{title}</h3>
            <div className="flex flex-col gap-2 mt-4">
              {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                bodyType === MODAL_BODY_TYPES.DEPARTMENT_ADD_NEW && (
                  <AddDepartModalBody
                    loading={loading}
                    extraObject={extraObject}
                  />
                )
              }
            </div>
            <div className="modal-action flex justify-center">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  onClick={close}
                >
                  ✕
                </button>
              </form>
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <div className="flex justify-center gap-1">
                  <button className="btn btn-error" onClick={close}>
                    Close
                  </button>
                  <button
                    className="btn bg-tim-color text-white hover:text-black"
                    onClick={handleSubmit}
                    disabled={loading}
                  >
                    {
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      loading && (
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
      )}
    </>
  );
}

export default ModalLayout;
