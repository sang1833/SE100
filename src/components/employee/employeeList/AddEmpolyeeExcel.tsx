import AddByExcelModal from "./AddByExcelModal";

export const AddEmpolyeeExcel = () => {
  function showModal(type: string) {
    const modal = document.getElementById(type) as HTMLDialogElement;
    if (modal !== null) {
      modal.showModal();
    }
  }

  return (
    <div>
      <button
        className="btn btn-neutral ml-2"
        onClick={() => {
          showModal("add_excel");
        }}
      >
        <p>Add By Excel</p>
      </button>
      <AddByExcelModal />
    </div>
  );
};
