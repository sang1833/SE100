import NotifyComponent from "@/components/notify/NotifyComponent";
import { useState } from "react";

const users = [
  {
    fullName: "Nguyễn Văn A",
    time: "8:00",
    status: 1,
    avatar: "https://i.pravatar.cc/300?img=1",
  },
  {
    fullName: "Nguyễn Văn B",
    time: "8:00",
    status: 0,
    avatar: "https://i.pravatar.cc/300?img=2",
  },
];

const Notify = () => {
  const [limit, setLimit] = useState(5);

  return (
    <>
      <div className="flex gap-2 items-center">
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
      </div>
      {users.map((user) => (
        <NotifyComponent user={user} />
      ))}
    </>
  );
};
export default Notify;
