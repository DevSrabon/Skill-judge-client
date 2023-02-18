import Banner from './Banner/Banner';
import EasyToStart from './EasyToStart/EasyToStart';
import Form from './Form/Form';
import Services from './Services/Services';
import TopQuestions from './TopQuestions/TopQuestions';
import UseOurApp from './UseOurApp/UseOurApp';

const Home = () => {
    return (
			<>
				<Banner />
				<div className="max-w-[90%] mx-auto">
					<EasyToStart />
					<TopQuestions />
					<Services />
					<Form />
				</div>
			</>
		);
};

export default Home;