import CountUp from "react-countup";

type CommunityPropsType = {
    info: string;
    account: number;
};

const Community = (props: CommunityPropsType) => {
    const { account, info } = props;
    return (
        <div className="flex py-[70px] space-y-5 justify-center items-center flex-col">
            <h3 className="text-7xl font-semibold text-white">
                <CountUp end={account} start={0} />
                <span>+</span>
            </h3>
            <p className="text-md font-normal text-white ">{info}</p>
        </div>
    );
};

export default Community;
