import EasyToStart from './EasyToStart/EasyToStart';
import Form from './Form/Form';
import Services from './Services/Services';
import SharpenSkill from './SharpenSkill/SharpenSkill';
import TopQuestions from './TopQuestions/TopQuestions';
import UseOurApp from './UseOurApp/UseOurApp';

const Home = () => {
    return (
        <div className='max-w-[90%] mx-auto'>
            <UseOurApp />
            <SharpenSkill />
            <EasyToStart />
            <TopQuestions />
            <Services />
            <Form />
        </div>
    );
};

export default Home;