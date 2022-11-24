import Article from "../helpers/Article";
import Aside from "../helpers/Aside";
import Section from "../helpers/Section";

const Main = () => {
    return(
        <main className='w-100 d-flex justify-content-around flex-wrap'>
            <Article />
            <Aside />
            <Section />
            
        </main>
    )
}

export default Main;