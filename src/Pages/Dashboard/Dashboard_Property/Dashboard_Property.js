import React from "react";
import { Chart } from "react-google-charts";



export function Dashboard_Property() {
  const PIE_CHART_DATA = [
    ["Task", "Hours per Day"],
    ["new-Assessemnt", 11],
    ["Re-Assessment", 2],
    ["Mutation", 2],
    ["Objection", 2],
    ["Rainwater Harvesting", 7],
  ];

  const PIE_CHART_OPTION = {
    title: "Applied Application",
    is3D: true,
  };

  const COLUMN_CHART_DATA = [
    ["Element", "Density", { role: "style" }],
    ["-------", 8.94, "#b87333"], // RGB value
    ["-------", 10.49, "silver"], // English color name
    ["-------", 19.3, "gold"],
    ["-------", 21.45, "color: #e5e4e2"], // CSS-style declaration
  ];

  const LINE_CHART_DATA = [
    ["Year", "Generated", "Pending"],
    ["2004", 1000, 400],
    ["2005", 1170, 460],
    ["2006", 660, 1120],
    ["2007", 1030, 540],
  ];


  const LINE_CHART_OPTIONS = {
    title: "Application Action",
    curveType: "function",
    legend: { position: "bottom" },
  };



  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 text-lg font-semibold text-gray-800 mb-1 underline decoration-sky-500 decoration-2">Property Dashboard</div>
      <div className="col-span-12 shadow-lg">
        <Chart
          chartType="PieChart"
          data={PIE_CHART_DATA}
          options={PIE_CHART_OPTION}
          width={"100%"}
          height={"400px"}
        />
      </div>
      <div className="col-span-6 shadow-lg"> <Chart chartType="ColumnChart" width="100%" height="400px" data={COLUMN_CHART_DATA} /></div>
      <div className="col-span-6 shadow-lg"> <Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={LINE_CHART_DATA}
        options={LINE_CHART_OPTIONS}
      /></div>
    </div>
  );
}

export default Dashboard_Property

