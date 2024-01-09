import { useState, useEffect } from "react";
import { RootState } from "@/store/store";
import { BellAlertIcon } from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HubConnectionBuilder, HubConnection } from "@microsoft/signalr";
import { attendance, addNotify } from "@/store/reducers/attendance_reducers";
import "./runningText.css";

interface DataInterface {
  employee_name: string;
  avatar: string;
  time: string;
  attendance_state: string;
  department_name: string;
}

function DropdownComponent() {
  const dispatch = useDispatch();
  const { numberOfNotify, data } = useSelector(
    (state: RootState) => state.attendance
  );
  const [message, setMessage] = useState<DataInterface[]>([]);
  const [connection, setConnection] = useState<HubConnection>();

  useEffect(() => {
    const fetchData = async () => {
      const a = await connect();
      console.log("a:", a);
      // dispatch(attendance(message));
      // console.log("message:", message.data);
    };

    fetchData();
  }, []);

  const connect = async () => {
    try {
      const newConnection = new HubConnectionBuilder()
        .withUrl("https://se100-main.azurewebsites.net/NotiHub") // Thay thế bằng URL của ứng dụng ASP.NET Core của bạn
        .withAutomaticReconnect()
        .build();
      // newConnection.on("GetListNoti", (message) => {
      //   setMessage(message);
      // });
      newConnection.on("GetListNoti", (message) => {
        const parsedMessage = JSON.parse(message);
        setMessage(parsedMessage);
        console.log("message:", parsedMessage);
        dispatch(
          attendance({ numberOfNotify: numberOfNotify, data: parsedMessage })
        );
        if (
          parsedMessage.length > 0 &&
          parsedMessage[0].time !== data[0].time
        ) {
          dispatch(addNotify(parsedMessage[0]));
        }
      });
      newConnection.onclose(() => {
        setConnection(undefined);
      });
      //console.log("newconnection:", newConnection)
      await newConnection.start();
      await newConnection.invoke("UpdateUser", 1);
      await newConnection.invoke("ConnectUser");
      setConnection(newConnection);
      console.log("build thanh cong, connection:", connection);
      // setConnection(newConnection);
    } catch (e) {
      setConnection(undefined);
      console.log(e);
    }
  };

  // const disconnect = async () => {
  //   try {
  //     if (connection) {
  //       await connection.stop();
  //     }
  //     setMessage([]);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  return (
    <div className="flex justify-center items-center">
      <div className="overflow-hidden">
        {message.length === 0 && <p>No notification.</p>}
        {message.length > 0 && (
          <p className="running-text">
            {message[0]?.employee_name} coming at{" "}
            {`
                      ${new Date(message[0]?.time).getUTCHours()}:${new Date(
                        message[0]?.time
                      ).getUTCMinutes()}
                      `}
            .
          </p>
        )}
      </div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className=" btn btn-ghost normal-case text-lg m-1">
          <div className="indicator">
            {numberOfNotify > 0 && message.length > 0 && (
              <span className="indicator-item badge badge-secondary"></span>
            )}
            <BellAlertIcon className="w-6 h-6" />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-80"
        >
          {message.slice(0, 5).map((item, index) => {
            return (
              <li key={index}>
                <Link to={"/notify"}>
                  <div
                    role="alert"
                    className={`alert ${
                      item.attendance_state === "Late"
                        ? "alert-warning"
                        : "alert-info"
                    } `}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="stroke-current shrink-0 w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span>
                      {`
${item.employee_name} coming at
  ${new Date(item.time).getUTCHours()}:${new Date(item.time).getUTCMinutes()}
`}
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
          {numberOfNotify === 0 && (
            <li>
              <Link to={"/notify"}>
                <div role="alert" className="alert">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="stroke-info shrink-0 w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span>Notification page. Tap to see.</span>
                </div>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default DropdownComponent;
