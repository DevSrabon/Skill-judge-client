import React from "react";
import CountUp from "react-countup";

type DashWidgetPropType = {
    icon: React.ReactNode;
    amount: number;
    signIcon:string;
    labelName: string;
};
const DashWidget = (props: DashWidgetPropType) => {
    const { icon, amount, labelName, signIcon } = props;
    return (
        <div className="grid  drop-shadow-2xl items-center grid-cols-2  h-24 rounded bg-gray-50 ">
            <h2 className="pl-5">{icon}</h2>
            <div>
                <h3 className="text-lg text-black font-medium">{labelName}</h3>
                <p className="text-lg text-gray-500 font-semibold">{signIcon}<CountUp end={amount && amount} start={0} /></p>
            </div>
        </div>
    );
};

export default DashWidget;
