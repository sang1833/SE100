import TotalPayroll from "./analysis/TotalPayroll";

const PayrollAnalysis = () => {
  return (
    <div className="flex flex-col gap-4">
      <section>
        <div className="bg-white p-4 border rounded-xl">
          <TotalPayroll></TotalPayroll>
        </div>
      </section>
    </div>
  );
};

export default PayrollAnalysis;
