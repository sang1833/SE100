import { PayrollTable } from "@/components/payroll/department/PayrollTable";
import PayrollAnalysis from "./department/PayrollAnalysis";

const Payroll = () => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <section className="flex justify-between mt-8">
          <h1 className="font-bold text-2xl text-gray-900">Payroll</h1>
          <section className="flex justify-start max-w-ms mb-8">
            <button className="btn bg-tim-color hover:text-black text-white">
              <p>Export Payroll</p>
            </button>
          </section>
        </section>
      </div>
      <section className="flex justify-between gap-2">
        <div className="w-2/3">
          <PayrollTable />
        </div>
        <div className="w-1/3">
          <PayrollAnalysis />
        </div>
      </section>
    </div>
  );
};

export default Payroll;
