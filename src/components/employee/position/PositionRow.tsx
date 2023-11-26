import { MdOutlineDeleteForever, MdOutlineEdit } from "react-icons/md";

interface PositionRowProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item: any;
  ShowChangeModal: () => void;
  ShowDeleteModal: () => void;
}

export const PositionRow = ({
  item,
  ShowChangeModal,
  ShowDeleteModal,
}: PositionRowProps) => {
  return (
    <tr>
      <td>{item._id}</td>
      <td>{item.title}</td>
      <td>{item.coef}</td>
      <th className="flex gap-1">
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
