import Communities from './Communities/Communities';
import Banner from './Banner/Banner';
import EasyToStart from './EasyToStart/EasyToStart';
import Form from './Form/Form';
import Services from './Services/Services';
import SharpenSkill from './SharpenSkill/SharpenSkill';
import TopQuestions from './TopQuestions/TopQuestions';

const Home = () => {
return (
		<>
			<Banner />
			<div className="max-w-[90%] mx-auto">
				<SharpenSkill />
				<EasyToStart />
        <Communities/>
				<TopQuestions />
				<Services />
				<Form />
			</div>
		</>
	);
}


export default Home;