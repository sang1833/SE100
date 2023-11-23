import { AttendanceTable } from "@/components/attendance/AttendanceTable";

const Attendance = () => {
  return (
    <div className="flex flex-col gap-4">
      <section className="flex justify-between mt-8">
        <h1 className="font-bold text-2xl text-gray-900">Attendance</h1>
        {/* <button className="btn bg-tim-color hover:text-black text-white">
          <p>Add Departments</p>
        </button> */}
      </section>
      <section>
        <AttendanceTable />
      </section>
    </div>
  );
};

export default Attendance;
