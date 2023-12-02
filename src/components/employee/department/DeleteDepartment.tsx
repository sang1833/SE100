import React, { useEffect } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import DeleteDepartmentModal from "./DeleteDepartmentModal";

import { DepartmentType } from "./Department";

interface DeleteDepartmentProps {
  ShowDeleteModal: () => void;
  item: DepartmentType;
}

const DeleteDepartmentItem = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ShowDeleteModal,
  item,
}: DeleteDepartmentProps) => {
  const code = item.code;
  console.log("code", code);

  useEffect(() => {
    console.log("item", item);
  }, [item]);

  function showModal() {
    const modal = document.getElementById(
      "delete_department_modal"
    ) as HTMLDialogElement;
    if (modal !== null) {
      modal.showModal();
    }
  }

  //   async function handleSubmitDelete() {
  //     if (Loading) return;
  //     setLoading(true);
  //     try {
  //       console.log("code", item.code);
  //       const res = await DeleteDepartment(code);
  //       dispatch({
  //         type: "NOTIFY",
  //         payload: {
  //           type: "success",
  //           message: res.data.message,
  //         },
  //       });
  //       console.log(res);
  //       setLoading(false);
  //       // window.location.reload();
  //       document.getElementById("btn-close")?.click();
  //       // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //     } catch (error: any) {
  //       console.log(error);
  //       dispatch({
  //         type: "NOTIFY",
  //         payload: {
  //           type: "error",
  //           message: error.response.data.message,
  //         },
  //       });
  //       setLoading(false);
  //       // window.location.reload();
  //       document.getElementById("btn-close")?.click();
  //     }
  //   }

  return (
    <>
      <button
        className="btn btn-ghost btn-xs text-red-600 border border-red-600"
        onClick={showModal}
      >
        <MdOutlineDeleteForever className="h-5 w-5" />
      </button>
      <DeleteDepartmentModal code={code} />
    </>
  );
};

export default DeleteDepartmentItem;
