import { PayrollTable } from "@/components/payroll/department/PayrollTable";

const Payroll = () => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <section className="flex justify-between">
          <h1 className="font-bold text-2xl text-gray-900">Payroll</h1>
          <section className="flex justify-start max-w-ms mb-8">
            <button className="btn bg-tim-color hover:text-black text-white">
              <p>Export Payroll</p>
            </button>
          </section>
        </section>
      </div>
      <section className="flex justify-between gap-2">
        <div className="w-full">
          <PayrollTable />
        </div>
      </section>
    </div>
  );
};

export default Payroll;
