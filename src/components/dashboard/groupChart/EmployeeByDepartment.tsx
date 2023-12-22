import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

// function getRandomColor() {
//   const letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

const labels = ["Human Resources", "IT"]; // Replace this with your fetched labels

export const data = {
  labels: labels,
  datasets: [
    {
      label: "Number",
      data: [12, 19],
      //   backgroundColor: labels.map(() => getRandomColor()),
      //   borderColor: labels.map(() => getRandomColor()),
      backgroundColor: [
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const EmployeeByDepartment = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h3 className="text-lg font-semibold py-4">Top 5 Department</h3>
        {/* <p className="text-lg p-4">300</p> */}
      </div>
      <div className="flex justify-center items-center">
        <div className="max-w-[14rem]">
          <Doughnut data={data} />
        </div>
      </div>
    </div>
  );
};

export default EmployeeByDepartment;
