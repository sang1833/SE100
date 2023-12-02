import {
  MdOutlineDeleteForever,
  MdOutlineEdit,
  MdOutlineFindInPage,
} from "react-icons/md";
import { DepartmentType } from "./Department";
import { useNavigate } from "react-router-dom";
import DeleteDepartmentModal from "./DeleteDepartmentModal";
import ChangeDepartmentModal from "./ChangeDepartmentModal";

interface DepartmentRowProps {
  item: DepartmentType;
  itemIndex: number;
  ShowChangeModal: () => void;
  ShowDeleteModal: () => void;
}

export const DepartmentRow = ({
  item,
  itemIndex,
  ShowChangeModal,
  ShowDeleteModal,
}: DepartmentRowProps) => {
  const navigate = useNavigate();
  return (
    <tr>
      <td>{itemIndex + 1}</td>
      <td>{item.name}</td>
      <td>{item.code}</td>
      {/* <td>{item.numberEmployee}</td>
      <td>{item.lastUpdate.toString().split("T")[0]}</td> */}
      <th className="flex gap-1">
        <button
          className="btn btn-ghost btn-xs text-green-800 border border-green-800"
          onClick={() => navigate(`/position/${item.name}/${item.id}`)}
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
      <DeleteDepartmentModal code={item.code} />
      <ChangeDepartmentModal id={item.id} name={item.name} />
    </tr>
  );
};
