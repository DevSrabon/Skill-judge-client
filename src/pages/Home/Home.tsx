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
            <TopQuestions />
            <Services />
            <Form/>
           
        </div>
    );
};

export default Home;