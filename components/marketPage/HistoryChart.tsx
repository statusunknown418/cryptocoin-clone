import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { useEffect, useRef } from "react";
import { useFetch } from "../../assets/useFetch";
import styles from "../../styles/modules/HistoryChart.module.scss";

const ChartJs = require("chart.js");
type Props = {
  name: string;
  designation?: string;
};
export const HistoryChart: React.FC<Props> = ({ name, designation }) => {
  const chartRef = useRef();
  const ATH_data: any | Array<string> = useFetch(
    designation
      ? `https://api.coinpaprika.com/v1/coins/${designation.toLowerCase()}-${name.toLowerCase()}`
      : `https://api.coinpaprika.com/v1/global`
  );

  const options = {
    chart: {
      type: "spline",
    },
    title: {
      text: "",
    },
    series: [{ data: [1, 2, 3, 5, 7, 6, 2, 4, 8] }],
  };
  useEffect(() => {
    if (chartRef && chartRef.current) {
      const chartInstance = new ChartJs(chartRef.current, {
        type: "line",
        data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              label: "# of Votes",
              data: [
                { x: 1, y: 14 },
                { x: 2, y: 16 },
                { x: 3, y: 10 },
                { x: 4, y: 20 },
                { x: 5, y: 15 },
                { x: 6, y: 28 },
                { x: 7, y: 5 },
                { x: 2, y: 11 },
                { x: 2, y: 9 },
              ],
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
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, []);

  return (
    <table cellSpacing={0} className={styles.styledTable}>
      <thead>
        <th className={styles.col2}>
          <b>{designation ? `${designation} price` : `Total ${name}`}</b>
        </th>
        <th>
          <ul>
            <button>24h</button>
            <button>7d</button>
            <button>30d</button>
            <button>1y</button>
          </ul>
        </th>
      </thead>
      <tbody>
        <tr>
          <td colSpan={2} className={styles.graphContainer}>
            <div>
              <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
          </td>
        </tr>
        <tr>
          <th>
            <p>{designation ? `${designation} price` : `Total ${name}`} </p>
          </th>
          <td>
            <span>6546514564</span>
          </td>
        </tr>
        <tr>
          <th>% from ATH</th>
          <td>
            <span>213128937</span>
          </td>
        </tr>
        <tr>
          <th>{name} ATH</th>
          <td>
            <span>12397810280</span>
            <br />
            12 May 2021
          </td>
        </tr>
      </tbody>
    </table>
  );
};
// <div className={styles.container}>
//   <h2>
//     {name}
//     <div>
//       <button>24h</button>
//       <button>7d</button>
//       <button>30d</button>
//     </div>
//   </h2>
//   <table>
//     <tr>
//       <td colSpan={2}>
//         <div className={styles.canvasContainer}>
//           <HighchartsReact highcharts={Highcharts} options={options} />
//         </div>
//         {/* <canvas ref={chartRef} /> */}
//       </td>
//     </tr>
//   </table>
//   <div className={styles.prices}>
//     <div>
//       <h3>{designation ? `${designation} price` : `Total ${name}`}</h3>
//       <div>126323</div>
//     </div>
//     <div>
//       <h3>% from ATH</h3>
//       <div>
//         {designation ? `$${ATH_data.ath}` : `$${ATH_data.market_cap_usd}`}
//       </div>
//     </div>
//     <div>
//       <h3>{name} ATH</h3>
//       <div>173289</div>
//     </div>
//   </div>
// </div>
