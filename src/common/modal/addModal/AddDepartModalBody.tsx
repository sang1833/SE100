/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
// import { addNewDecree } from "@/store/reducers/department_reducers";

const INITIAL_LEAD_OBJ = {
  first_name: "",
  last_name: "",
  email: "",
};

interface ModalProps {
  closeModal: () => void;
  extraObject: any;
}

function AddDepartModalBody({ closeModal, extraObject }: ModalProps) {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [leadObj, setLeadObj] = useState(INITIAL_LEAD_OBJ);

  const saveNewLead = () => {
    if (leadObj.first_name.trim() === "")
      return setErrorMessage("First Name is required!");
    else if (leadObj.email.trim() === "")
      return setErrorMessage("Email id is required!");
    else {
      let newLeadObj = {
        id: 7,
        email: leadObj.email,
        first_name: leadObj.first_name,
        last_name: leadObj.last_name,
        avatar: "https://reqres.in/img/faces/1-image.jpg",
      };
      // dispatch(addNewDecree({ newLeadObj }));
      // dispatch(showNotification({ message: "New Lead Added!", status: 1 }));
      closeModal();
    }
  };

  // const updateFormValue = ({ updateType, value }) => {
  //   setErrorMessage("");
  //   setLeadObj({ ...leadObj, [updateType]: value });
  // };

  return (
    <>
      <div className="modal-action">
        <button className="btn btn-ghost" onClick={() => closeModal()}>
          Cancel
        </button>
        <button className="btn btn-primary px-6" onClick={() => saveNewLead()}>
          Save
        </button>
      </div>
    </>
  );
}

export default AddDepartModalBody;
