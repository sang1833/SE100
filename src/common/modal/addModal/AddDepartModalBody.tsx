interface ModalBodyProps {
  loading: boolean;
  extraObject?: any;
}

const AddDepartModalBody = ({ loading }: ModalBodyProps) => {
  return (
    <div>
      {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        loading && <span className="loading loading-infinity loading-md"></span>
      }
    </div>
  );
};

export default AddDepartModalBody;
