import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["IT", "Marketing", "Sales", "HR", "Finance"],
  datasets: [
    {
      label: "Number",
      data: [12, 19, 43, 4, 5],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const TotalPayroll = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between w-full min-w-[24rem]">
        <h3 className="text-lg font-semibold py-4">Total Payroll this month</h3>
        <p className="text-lg p-4 flex gap-2">
          <span className="">1.000.000</span>
          <span className="">VND</span>
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="max-w-[14rem]">
          <Doughnut data={data} />
        </div>
      </div>
    </div>
  );
};

export default TotalPayroll;
