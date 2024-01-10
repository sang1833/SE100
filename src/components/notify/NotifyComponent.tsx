import { useDispatch } from "react-redux";
import { removeNotify } from "@/store/reducers/attendance_reducers";
import { useEffect } from "react";
import { DataInterface } from "../navbar/NotifyIcon";

interface Props {
  user: DataInterface;
}

const NotifyComponent = ({ user }: Props) => {
  const dispatch = useDispatch();
  const badgeGreen = "bg-green-700 border-green-700";
  const badgeRed = "bg-orange-600 border-orange-600";

  useEffect(() => {
    setTimeout(() => {
      dispatch(removeNotify());
    }, 100);
  }, []);

  return (
    <div className="py-2">
      <div className="flex justify-start items-center gap-2 ">
        <div className="avatar">
          <div className="w-12 rounded">
            <img
              src={
                user.avatar && user.avatar !== "string"
                  ? user.avatar
                  : "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
              }
              alt="avatar"
            />
          </div>
        </div>
        <div className="grid grid-cols-6 min-w-full">
          <div className="flex justify-start flex-col gap-2">
            <h2 className="font-bold">{user.employee_name}</h2>

            <div
              className={`badge badge-primary  text-white ${
                user.attendance_state === "Late" ? badgeRed : badgeGreen
              }`}
            >
              {user.attendance_state === "Late" ? "Late" : "On time"}
            </div>
          </div>

          <div className="chat-time col-start-6 flex items-end">{`
             ${new Date(user.time).getDate()}/${
               new Date(user.time).getMonth() + 1
             }/${new Date(user.time).getFullYear()} -
             ${new Date(user.time).getUTCHours()}:${new Date(
               user.time
             ).getUTCMinutes()}
                      `}</div>
        </div>
      </div>
    </div>
  );
};

export default NotifyComponent;
