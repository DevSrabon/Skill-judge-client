import Accordion from "../../components/shared/Accordion/Accordion";
import Communities from "./Communities/Communities";
import Banner from "./Banner/Banner";
import EasyToStart from "./EasyToStart/EasyToStart";
import Form from "./Form/Form";
import Services from "./Services/Services";
import SharpenSkill from "./SharpenSkill/SharpenSkill";
import TopQuestions from "./TopQuestions/TopQuestions";
import Languages from "./Languages/Languages";
import AboutUs from "../AboutUs/AboutUs";

const Home = () => {
	return (
		<>
			<Banner />
			<div className="max-w-[90%] mx-auto">
				<SharpenSkill />
				<Languages />
				<Communities />
				<TopQuestions />
				<Services />
				<AboutUs/>
				<Form />
				<Accordion />
			</div>
		</>
	);
};

export default Home;
