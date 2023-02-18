import Accordion from '../../components/shared/Accordion/Accordion';
import Communities from './Communities/Communities';
import EasyToStart from './EasyToStart/EasyToStart';
import Form from './Form/Form';
import Services from './Services/Services';
import TopQuestions from './TopQuestions/TopQuestions';
import UseOurApp from './UseOurApp/UseOurApp';

const Home = () => {
    return (
        <div className='max-w-[90%] mx-auto'>
            <UseOurApp />
            <EasyToStart />
            <Communities/>
            <TopQuestions />
            <Services />
            <Form/> 
            <Accordion/>          
        </div>
    );
};

export default Home;