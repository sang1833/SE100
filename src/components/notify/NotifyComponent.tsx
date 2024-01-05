import { useDispatch } from "react-redux";
import { removeNotify } from "@/store/reducers/attendance_reducers";
import { useEffect } from "react";

const NotifyComponent = ({ user }: any) => {
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
      <div className="flex justify-start items-center max-w-xs gap-2 ">
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
        <div className="grid grid-cols-1">
          <div className="flex justify-start gap-2">
            <h2 className="font-bold">{user.fullName}</h2>
            <div className="chat-time">{`
           ${new Date(user.time).getDate()}/${
             new Date(user.time).getMonth() + 1
           }/${new Date(user.time).getFullYear()} -
                    ${new Date(user.time).getHours()}:${new Date(
                      user.time
                    ).getMinutes()}
                    `}</div>
          </div>
          <div
            className={`badge badge-primary  text-white ${
              user.status === 1 ? badgeGreen : badgeRed
            }`}
          >
            {user.status === 1 ? "On time" : "Late"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotifyComponent;
