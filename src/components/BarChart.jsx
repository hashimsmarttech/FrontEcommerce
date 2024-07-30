import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Legend,
  Tooltip,
  ArcElement,
  PointElement,
  LineElement,
  Filler,
  RadialLinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Legend,
  Tooltip,
  ArcElement,
  PointElement,
  LineElement,
  Filler,
  RadialLinearScale
);

const BarChart = ({ sold, title }) => {
  const options = {
    responsive: true,
    indexAxis: "x",
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
      },
    },

    scales: {
      y: {
        beginAtZero: false,
        grid: {
          display: true,
        },
      },
      x: {
        grid: {
          display: true,
        },
      },
    },
  };

  const data = {
    labels: title,
    datasets: [
      {
        label: "Units Sold",
        data: sold,
        backgroundColor: "rgba(65, 61, 234, 0.8)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        barThickness: "flex",
        barPercentage: 0.8,
        categoryPercentage: 0.4,
      },
    ],
  };
  return (
    <>
      <Bar width={"350px"} options={options} data={data} />
    </>
  );
};

export default BarChart;
