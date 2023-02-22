import React from "react";
import { FiUsers } from "react-icons/fi";
import { BiUserVoice } from "react-icons/bi";
import { MdOutlineQuiz, MdOutlinePaid } from "react-icons/md";
import DashWidget from "../../components/shared/Dashboard/Dashboard/DashWidget/DashWidget";
import AreaChart from "../../components/shared/Dashboard/Dashboard/AreaChart/AreaChart";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../SharedComponent/Spinner/Spinner";
import NotFound from "../404";

const DashboardV2 = () => {
    const { data, isLoading, isError }: any = useQuery({
        queryKey: ["dashboard", "widget"],
        queryFn: () =>
            fetch(`${process.env.REACT_APP_API_URL}/dashboard/widget`).then(
                (res) => res.json()
            ),
    });
    if (isLoading) {
        return <Spinner />;
    }
    if(isError){
        return <NotFound/>
    }
    return (
        <div className="p-4 lg:ml-64">
            <div className="p-4 mt-14">
                <div className="grid lg:grid-cols-4 sm:grid-cols-2  gap-4 mb-4">
                    <DashWidget
                        icon={
                            <>
                                <FiUsers className="text-6xl text-rose-500" />
                            </>
                        }
                        labelName={"Users"}
                        amount={data?.users}
                        signIcon={"+"}
                    />
                    <DashWidget
                        icon={
                            <>
                                <MdOutlineQuiz className="text-6xl text-rose-500" />
                            </>
                        }
                        labelName={"Quizs"}
                        amount={data?.quiz}
                        signIcon={"+"}
                    />
                    <DashWidget
                        icon={
                            <>
                                <BiUserVoice className="text-6xl text-rose-500" />
                            </>
                        }
                        labelName={"Paid Users"}
                        amount={data?.submissions}
                        signIcon={"+"}
                    />
                    <DashWidget
                        icon={
                            <>
                                <MdOutlinePaid className="text-6xl text-rose-500" />
                            </>
                        }
                        labelName={"Earning"}
                        amount={data?.totalEarnings}
                        signIcon={"$"}
                    />
                </div>
                <div className="py-5 lg:px-32">
                    <AreaChart data={data &&  data} />
                </div>
            </div>
        </div>
    );
};

export default DashboardV2;
