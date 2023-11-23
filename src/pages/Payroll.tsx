import { PayrollTable } from "@/components/payroll/PayrollTable";

const Payroll = () => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <section className="flex justify-between mt-8">
          <h1 className="font-bold text-2xl text-gray-900">Payroll</h1>
          <button className="btn bg-tim-color hover:text-black text-white">
            <p>Export Payroll</p>
          </button>
        </section>
      </div>
      <section>
        <PayrollTable />
      </section>
    </div>
  );
};

export default Payroll;
