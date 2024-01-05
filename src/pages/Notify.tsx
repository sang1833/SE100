import NotifyComponent from "@/components/notify/NotifyComponent";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
// import { useState } from "react";

const Notify = () => {
  // const [limit, setLimit] = useState(5);
  const { data } = useSelector((state: RootState) => state.attendance);

  return (
    <div className="min-h-screen">
      <div className="flex flex-col gap-4 mb-4 ">
        <section className="flex justify-between">
          <h1 className="font-bold text-2xl text-gray-900">Notification</h1>
        </section>
      </div>
      {/* <div className="flex gap-2 items-center">
        <p>Limit: </p>
        <select
          className="select select-bordered select-sm"
          onChange={(e) => {
            setLimit(Number(e.target.value));
            console.log("numberOfPage", limit);
          }}
          value={limit}
        >
          {Array.from({ length: 15 }, (_, i) => i + 1).map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div> */}
      {data.map((user) => (
        <NotifyComponent user={user} />
      ))}
    </div>
  );
};
export default Notify;
