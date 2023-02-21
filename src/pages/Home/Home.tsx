import Accordion from '../../components/shared/Accordion/Accordion';
import Communities from './Communities/Communities';
import Banner from './Banner/Banner';
import Form from './Form/Form';
import Services from './Services/Services';
import SharpenSkill from './SharpenSkill/SharpenSkill';
import TopQuestions from './TopQuestions/TopQuestions';
import Languages from './Languages/Languages';
import UserReviews from './UserReviews/UserReviews';
import AboutUs from "../AboutUs/AboutUs";
import Steps from './Steps/Steps';

const Home = () => {
	return (
		<>
			<Banner/>
			<div className="max-w-[90%] mx-auto flex flex-col gap-8 md:gap-16">
				<SharpenSkill />
				<Steps/>
				<Languages/>
				<Communities/>
				<TopQuestions/>
				<Services/>
				<UserReviews/>
       			<AboutUs/>
				<Form/>
				<Accordion/>
			</div>
		</>
	)
}

export default Home;
