import Form from './Form/Form';
import Languages from './Languages/Languages';
import Services from './Services/Services';
import TopQuestions from './TopQuestions/TopQuestions';
import UseOurApp from './UseOurApp/UseOurApp';

const Home = () => {
    return (
        <div className='max-w-[90%] mx-auto'>
            <UseOurApp />
            <Languages/>
            <TopQuestions />
            <Services />
            <Form/>           
        </div>
    );
};

export default Home;