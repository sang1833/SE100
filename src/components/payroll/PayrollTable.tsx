export const PayrollTable = () => {
  return (
    <div>
      <div className="my-4 flex justify-start items-center">
        <p>Filter by:</p>
        <select className="select select-bordered w-full max-w-xs mx-2">
          <option disabled selected>
            Department
          </option>
          <option>IT</option>
          <option>Marketing</option>
        </select>
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Month
          </option>
          <option>IT</option>
          <option>Marketing</option>
        </select>
      </div>
    </div>
  );
};
