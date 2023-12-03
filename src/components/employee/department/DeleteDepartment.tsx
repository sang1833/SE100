import React, { useEffect } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";

import { DepartmentType } from "./Department";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

interface DeleteDepartmentProps {
  ShowDeleteModal: () => void;
  item: DepartmentType;
}

const DeleteDepartmentItem = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ShowDeleteModal,
  item,
}: DeleteDepartmentProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const code = item.code;
  console.log("code", code);

  useEffect(() => {
    dispatch({
      type: "CHANGE",
      payload: {
        dataPage: code,
      },
    });
  }, [code, dispatch]);

  // function showModal() {
  //   const modal = document.getElementById(
  //     "delete_department_modal"
  //   ) as HTMLDialogElement;
  //   if (modal !== null) {
  //     modal.showModal();
  //   }
  // }

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
        onClick={() => navigate(`/department/delete/${item.code}`)}
      >
        <MdOutlineDeleteForever className="h-5 w-5" />
      </button>
    </>
  );
};

export default DeleteDepartmentItem;
