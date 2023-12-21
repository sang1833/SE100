import { MdOutlineDeleteForever, MdOutlineEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { PositionDTO } from "../department/Department";

interface PositionRowProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item: PositionDTO;
  index: number;
}

export const PositionRow = ({ item, index }: PositionRowProps) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{item.position_code}</td>
      <td>{item.title}</td>
      <td>{item.salary_coeffcient}</td>
      <th className="flex gap-1">
        <Link
          to={`change/${item.posiition_ID}/${item.title}/${item.position_code}/${item.salary_coeffcient}`}
        >
          <button className="btn btn-ghost btn-xs border border-gray-600">
            <MdOutlineEdit className="h-5 w-5" />
          </button>
        </Link>
        <Link to={`delete/${item.posiition_ID}`}>
          <button className="btn btn-ghost btn-xs text-red-600 border border-red-600">
            <MdOutlineDeleteForever className="h-5 w-5" />
          </button>
        </Link>
      </th>
    </tr>
  );
};
