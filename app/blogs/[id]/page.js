
import Component from '../../components/MainPage';

const page = ({ params }) => {
    //  const{main_id} = params.id;
    return (
        <div>
            {/* <h1 className='text-3xl'>{params.id}</h1> */}
            <Component main_id={params.id}></Component>
        </div>
    );
};

export default page;