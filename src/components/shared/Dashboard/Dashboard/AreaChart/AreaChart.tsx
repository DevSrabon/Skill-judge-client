import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const options = {
    response:true,
    plugins: {
        legend: {
            position: "top" as const,
            labels: {
                color: "#fff",
                font: {
                    size: 15,
                },
            },
            display:false
        },
        title: {
            display: true,
            text: "Project Overview",
            color: "#fff",
            font: {
                size: 20,
            },
        },
    },
    scales: {
        x: {
            ticks: {
                color: "#fff",
                font: {
                    size: 16,
                },
            },
        },
        y: {
            ticks: {
                color: "#fff",
            },
        },
    },
};
const labels = ["Users", "Quizs","Submissions", "Earnings"];

const AreaChart = ({ data }: any) => {
    return (
        <div style={{width: '99%'}}>
            <Line
                options={options}
                data={{
                    labels,
                    datasets: [
                        {
                            fill: true,
                            label: "",
                            data: [data.users, data.submissions, data.quiz, data.totalEarnings],
                            borderColor: "#fff",
                            backgroundColor: "transparent",
                        },
                    ],
                }}
            />
        </div>
    );
};

export default AreaChart;
