import ChangeRoleModal from "./ChangeRoleModal";

const AvatarGroup = () => {
  function showModal() {
    const modal = document.getElementById("my_modal_5") as HTMLDialogElement;
    if (modal !== null) {
      modal.showModal();
    }
  }
  return (
    <div>
      <div className="avatar-group -space-x-6 max-md:hidden">
        <div className="avatar">
          <div className="w-12 h-12">
            <img src="/src/assets/man-avatar.png" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-12 h-12">
            <img src="/src/assets/woman.png" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-12 h-12">
            <img src="/src/assets/man-avatar (1).png" />
          </div>
        </div>
        <div
          className="avatar placeholder hover:cursor-pointer"
          onClick={showModal}
        >
          <div className="w-12 h-12 bg-neutral-focus text-neutral-content">
            <span>+</span>
          </div>
        </div>
      </div>
      {/* responsive */}
      <div
        className="md:hidden avatar placeholder hover:cursor-pointer"
        onClick={showModal}
      >
        <div className="w-12 h-12 bg-neutral-focus text-neutral-content rounded-full">
          <span>+</span>
        </div>
      </div>
      <ChangeRoleModal showModal={showModal} />
    </div>
  );
};

export default AvatarGroup;
