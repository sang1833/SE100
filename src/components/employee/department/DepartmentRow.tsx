import {
  MdOutlineDeleteForever,
  MdOutlineEdit,
  MdOutlineFindInPage,
} from "react-icons/md";
import { DepartmentType } from "./Department";
import { useNavigate } from "react-router-dom";

interface DepartmentRowProps {
  item: DepartmentType;
  ShowChangeModal: () => void;
  ShowDeleteModal: () => void;
}

export const DepartmentRow = ({
  item,
  ShowChangeModal,
  ShowDeleteModal,
}: DepartmentRowProps) => {
  const navigate = useNavigate();
  return (
    <tr>
      <td>{item._id}</td>
      <td>{item.departmentName}</td>
      <td>{item.idBoss}</td>
      <td>0</td>
      <td>{item.lastUpdate.toString().split("T")[0]}</td>
      <th className="flex gap-1">
        <button
          className="btn btn-ghost btn-xs text-green-800 border border-green-800"
          onClick={() =>
            navigate(`/position/${item.departmentName}/${item._id}`)
          }
        >
          <MdOutlineFindInPage className="h-5 w-6" />
        </button>
        <button
          className="btn btn-ghost btn-xs border border-gray-600"
          onClick={ShowChangeModal}
        >
          <MdOutlineEdit className="h-5 w-5" />
        </button>
        <button
          className="btn btn-ghost btn-xs text-red-600 border border-red-600"
          onClick={ShowDeleteModal}
        >
          <MdOutlineDeleteForever className="h-5 w-5" />
        </button>
      </th>
    </tr>
  );
};
