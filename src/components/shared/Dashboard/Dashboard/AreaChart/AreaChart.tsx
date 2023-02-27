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
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

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



const labels = ["Users", "Quizs", "Submissions", "Earnings"];

const AreaChart = ({ data }: any) => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState<Boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return null;

    let options:any;
    let dataSet:any;
    const renderThemeChanger = () => {
        if (theme === "dark") {
            return( options = {
                responsive:true,
                plugins: {
                    legend: {
                        position: "top" as const,
                        labels: {
                            color: "#fff",
                            font: {
                                size: 15,
                            },
                        },
                        display: false,
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
            },
            dataSet = [
                {
                    fill: true,
                    label: "",
                    data: [
                        data.users,
                        data.submissions,
                        data.quiz,
                        data.totalEarnings,
                    ],
                    borderColor: "#fff",
                    backgroundColor: "transparent",
                },
            ]
            )
        } else {
            return( options = {
                responsive:true,
                plugins: {
                    legend: {
                        position: "top" as const,
                        labels: {
                            color: "#000",
                            font: {
                                size: 15,
                            },
                        },
                        display: false,
                    },
                    title: {
                        display: true,
                        text: "Project Overview",
                        color: "#000",
                        font: {
                            size: 20,
                        },
                    },
                },
                scales: {
                    x: {
                        ticks: {
                            color: "#000",
                            font: {
                                size: 16,
                            },
                        },
                    },
                    y: {
                        ticks: {
                            color: "#000",
                        },
                    },
                },
            },
            dataSet = [
                {
                    fill: true,
                    label: "",
                    data: [
                        data.users,
                        data.submissions,
                        data.quiz,
                        data.totalEarnings,
                    ],
                    borderColor: "#000",
                    backgroundColor: "transparent",
                },
            ]
            );
        }
    };

    renderThemeChanger();
    return (
        <div style={{ width: "99%" }}>
            <Line
                options={options}
                data={{
                    labels,
                    datasets: dataSet,
                }}
            />
        </div>
    );
};

export default AreaChart;
