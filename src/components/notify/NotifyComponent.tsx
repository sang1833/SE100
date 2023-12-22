const NotifyComponent = ({ user }: any) => {
  const badgeGreen = "bg-green-700 border-green-700";
  const badgeRed = "bg-red-700 border-red-700";

  return (
    <div className="py-2">
      <div className="flex justify-start items-center max-w-xs gap-2 ">
        <div className="avatar">
          <div className="w-12 rounded">
            <img src={user.avatar} />
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div className="flex justify-start gap-2">
            <h2 className="font-bold">{user.fullName}</h2>
            <div className="chat-time">{user.time}</div>
          </div>
          <div
            className={`badge badge-primary  text-white ${
              user.status === 1 ? badgeGreen : badgeRed
            }`}
          >
            {user.status === 1 ? "On Time" : "Late"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotifyComponent;
