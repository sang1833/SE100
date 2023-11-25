import { NewPosition } from "@/apis/api_function";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface FormValues {
  title: string;
  coefficent: number;
}

interface Props {
  departmentId: string;
}

const schema = yup.object().shape({
  title: yup.string().required(),
  coefficent: yup.number().required(),
});

const PositionModal = ({ departmentId }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  function Done(data: FormValues) {
    try {
      NewPosition(data.title, departmentId, data.coefficent);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog
        id="add_position_modal"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add position</h3>
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex gap-1 items-center justify-between">
              <label htmlFor="">Position Title: </label>
              <input
                type="text"
                placeholder="Position Name"
                className="input input-bordered w-full max-w-xs"
                {...register("title")}
              />
            </div>
            {errors.title && (
              <span className="text-red-600">{errors.title.message}</span>
            )}
            <div className="flex gap-1 items-center justify-between">
              <label htmlFor="">Position Coefficient: </label>
              <input
                type="number"
                placeholder="Position Coefficient"
                className="input input-bordered w-full max-w-xs"
                {...register("coefficent")}
              />
            </div>
            {errors.coefficent && (
              <span className="text-red-600">{errors.coefficent.message}</span>
            )}
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
                  onClick={handleSubmit(Done)}
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

export default PositionModal;
