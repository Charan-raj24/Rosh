import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
    const nav = useNavigate();

    return (
        <>
           
                <div className="charan">
                    <img src='/roshini.jpeg' alt='roshini' className='bottom' />
                    <h1 onClick={() => nav('/flower')}>NERD</h1>
                </div>
          
        </>
    );
}

export default Home;
