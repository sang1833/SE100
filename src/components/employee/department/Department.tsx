const department = [
  {
    id: 1,
    name: "IT",
    description: "IT Department",
    head: "Nguyen Van A",
    number: 10,
  },
  {
    id: 2,
    name: "HR",
    description: "HR Department",
    head: "Nguyen Van B",
    number: 8,
  },
  {
    id: 3,
    name: "Marketing",
    description: "Marketing Department",
    head: "Nguyen Van C",
    number: 12,
  },
];

const Department = () => {
  return (
    <div className="flex flex-col gap-4">
      <section className="flex justify-between mt-8">
        <h1 className="font-bold text-2xl text-gray-900">Departments</h1>
        <button className="btn bg-tim-color hover:text-black text-white">
          <p>Add Departments</p>
        </button>
      </section>
      <section className="bg-white border rounded-lg">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Description</th>
                <th>Head</th>
                <th>Number of Employees</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* rows */}
              {department.map((item) => (
                <tr key={item.id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.head}</td>
                  <td>{item.number}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              ))}
            </tbody>
            {/* foot */}
            <tfoot>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Description</th>
                <th>Head</th>
                <th>Number of Employees</th>
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Department;
