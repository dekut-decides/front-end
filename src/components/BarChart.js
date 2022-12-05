import React from "react";
import { Bar, Chart} from "react-chartjs-2";
import { Chart as Chartjs } from "chart.js/auto";
function BarChart({ ChartData }) {



  return <Bar data={ChartData}  />;
}

export default BarChart;
