import { PayrollTable } from "@/components/payroll/department/PayrollTable";
import PayrollAnalysis from "./department/PayrollAnalysis";

const Payroll = () => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <section className="flex justify-between mt-8">
          <h1 className="font-bold text-2xl text-gray-900">Payroll</h1>
        </section>
        <section className="flex justify-start max-w-ms">
          <button className="btn bg-tim-color hover:text-black text-white">
            <p>Export Payroll</p>
          </button>
        </section>
      </div>
      <section className="flex justify-between">
        <PayrollTable />
        <PayrollAnalysis />
      </section>
    </div>
  );
};

export default Payroll;
