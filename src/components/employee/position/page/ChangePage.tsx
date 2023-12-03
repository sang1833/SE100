import { useEffect } from "react";
import ChangePositionModal from "../ChangePositionModal";

const ChangePage = () => {
  useEffect(() => {
    function showModal(type: string) {
      const modal = document.getElementById(type) as HTMLDialogElement;
      if (modal !== null) {
        modal.showModal();
      }
    }
    showModal("change_position_modal");
  }, []);

  return (
    <div className="">
      <ChangePositionModal />
    </div>
  );
};

export default ChangePage;
