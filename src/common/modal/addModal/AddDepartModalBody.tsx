interface ModalBodyProps {
  loading: boolean;
  extraObject?: any;
}

const AddDepartModalBody = ({ loading }: ModalBodyProps) => {
  return (
    <>
      <div className="flex gap-1 items-center justify-between">
        <label htmlFor="">Department Name: </label>
        <input
          type="text"
          placeholder="Department name"
          className="input input-bordered w-full max-w-xs"
          // value={departmentName}
          // onChange={(e) => setDepartmentName(e.target.value)}
          disabled={loading}
        />
      </div>
      <div className="flex gap-1 items-center justify-between">
        <label htmlFor="">Department Code: </label>
        <input
          type="text"
          placeholder="Department code"
          className="input input-bordered w-full max-w-xs"
          // value={departmentCode}
          // onChange={(e) => setDepartmentCode(e.target.value)}
          disabled={loading}
        />
      </div>
    </>
  );
};

export default AddDepartModalBody;
