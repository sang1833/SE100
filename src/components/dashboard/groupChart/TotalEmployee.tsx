import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Woman", "Man"],
  datasets: [
    {
      label: "Number",
      data: [12, 19],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 1,
    },
  ],
};

const TotalEmployee = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h3 className="text-lg font-semibold py-4">Total Employees</h3>
        <p className="text-lg p-4">300</p>
      </div>
      <div className="flex justify-center items-center">
        <div className="max-w-[14rem]">
          <Doughnut data={data} />
        </div>
      </div>
    </div>
  );
};

export default TotalEmployee;
