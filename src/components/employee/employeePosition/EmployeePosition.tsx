import { useEffect, useState } from "react";
import { GetEmployeeByPositionId } from "@/apis/api_function";
import { useDispatch } from "react-redux";
import React from "react";
// import { RootState } from "@/store/store";
import { useParams, useNavigate } from "react-router-dom";
import {
  MdOutlineAttachMoney,
  MdOutlineDeleteForever,
  MdOutlineEdit,
} from "react-icons/md";

// "id": 999999999,
//       "email": "admin@gmail.com",
//       "fullName": "admin",
//       "phoneNumber": "string",
//       "avatar": "string",
//       "birth_day": "2023-12-26T11:50:03.9484762Z",
//       "gender": true,
//       "cmnd": "string",
//       "address": "string"

export interface EmployeeType {
  id: number;
  email: string;
  fullName: string;
  phoneNumber: string;
  avatar: string;
  birth_day: string;
  gender: boolean;
  cmnd: string;
  address: string;
}

export interface EmployeeInforType {
  list_emp: EmployeeType[];
  current_page: number;
  perpage: number;
  pages: number;
}

const EmployeePosition = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id, name } = useParams();
  // const listEmployee = useSelector((state: RootState) => state.employee);
  const [employee, setEmployee] = useState<EmployeeType[]>([]);
  const [numberOfPage, setNumberOfPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  // if (listEmployee.pages) {
  //   if (currentPage > listEmployee.pages) {
  //     setCurrentPage(listEmployee.pages);
  //   }
  // }
  // const employeeRef = useRef<EmployeeType[]>([]);
  // const [loading, setLoading] = useState(false);

  function showModal(type: string) {
    const modal = document.getElementById(type) as HTMLDialogElement;
    if (modal !== null) {
      modal.showModal();
    }
  }

  useEffect(() => {
    const getEmployee = async () => {
      // setLoading(true);
      try {
        const res = await GetEmployeeByPositionId(id || "1", 1, 10);
        console.log("currentPage", currentPage, "numberOfPage", numberOfPage);
        console.log("res.data employee", res.data);
        if (res.data === 0) {
          dispatch({
            type: "NOTIFY",
            payload: {
              type: "error",
              message: "Server error!",
            },
          });
          // setLoading(false);
          return;
        }
        const data = res.data;
        if (data.length === 0) {
          setCurrentPage(1);
          return;
        }
        setEmployee(data.list_emp);
        // employeeRef.current = data;
        console.log("setEmployee", employee);
        dispatch({
          type: "ADD_EMPLOYEES",
          payload: data,
        });

        // setLoading(false);
      } catch (error) {
        dispatch({
          type: "NOTIFY",
          payload: {
            type: "error",
            message: "Server error!",
          },
        });
        // setLoading(false);
        setCurrentPage(1);
        setNumberOfPage(10);
        console.log(error);
      }
    };
    // employeeRef.current = listEmployee;

    getEmployee();
  }, [dispatch, currentPage, numberOfPage]);

  // if (loading)
  //   return (
  //     <div>
  //       <Loading />
  //     </div>
  //   );
  return (
    <div className="flex flex-col gap-4">
      <section className="flex justify-between">
        <h1 className="font-bold text-2xl text-gray-900">Employee in {name}</h1>
        <button
          className="btn bg-tim-color hover:text-black text-white"
          onClick={() => showModal("add_employee_modal")}
        >
          <p>Add Employees</p>
        </button>
      </section>
      <section className="">
        <div className="overflow-x-auto bg-white border rounded-lg">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Mail</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Birth day</th>
                <th>Gender</th>
                <th>Id</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employee.map((item, index) => (
                <React.Fragment key={item?.id}>
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.email}</td>
                    <td>{item.fullName}</td>
                    <td>{item.phoneNumber}</td>
                    <td>{item.birth_day}</td>
                    <td>{item.gender ? "Male" : "Female"}</td>
                    <td>{item.cmnd}</td>
                    <td>{item.address}</td>

                    <th className="flex gap-1">
                      <button
                        className="btn btn-ghost btn-xs border text-green-800 border-green-800"
                        key={item.id}
                        // onClick={() => navigate(`/employee/${item.id}`)}
                      >
                        <MdOutlineAttachMoney className="h-5 w-5" />
                      </button>
                      <button
                        className="btn btn-ghost btn-xs border text-tim-color border-tim-color-1"
                        key={item.id}
                        // onClick={() => navigate(`/employee/${item.id}`)}
                      >
                        <MdOutlineEdit className="h-5 w-5" />
                      </button>
                      <button
                        className="btn btn-ghost btn-xs text-red-600 border border-red-600"
                        key={item.id}
                        // onClick={() => showModal("delete_profile_modal")}
                      >
                        <MdOutlineDeleteForever className="h-5 w-5" />
                      </button>
                    </th>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
        <div className="grid grid-cols-3 p-4">
          {/* <div className="grid grid-cols-2">
            <p>Show 1 to {numberOfPage} of 57</p>
            <div className="flex gap-2">
              <p>Rows per pages: </p>
              <select
                className="select select-bordered select-xs"
                onChange={(e) => {
                  setNumberOfPage(Number(e.target.value));
                  console.log("numberOfPage", numberOfPage);
                }}
                value={numberOfPage}
              >
                {Array.from({ length: 15 }, (_, i) => i + 1).map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </div>
          </div> */}
          <div className="join grid grid-cols-2 col-start-3">
            {/* <button
              className="join-item btn btn-outline btn-sm"
              onClick={() => {
                setCurrentPage((prev) => {
                  if (prev > listEmployee.pages && listEmployee.pages)
                    return prev - 1;
                  return prev;
                });
              }}
            >
              Previous
            </button>
            <button
              className="join-item btn btn-outline btn-sm"
              onClick={() => {
                setCurrentPage((prev) => {
                  if (prev < listEmployee.pages && listEmployee.pages)
                    return prev + 1;
                  return prev;
                });
              }}
            >
              Next
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmployeePosition;
