import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      // text: "Chart.js Bar Chart",
    },
  },
};

const labels = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const data = {
  labels,
  datasets: [
    {
      label: "On time",
      data: labels.map(() => Math.floor(Math.random() * 10)),
      backgroundColor: "rgb(0, 204, 153)",
    },
    {
      label: "Late",
      data: labels.map(() => Math.floor(Math.random() * 10)),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Absent",
      data: labels.map(() => Math.floor(Math.random() * 10)),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export default function AttendanceChart() {
  return <Bar options={options} data={data} />;
}
