import './Hello.css'
import worldImg from './earth.jpg'

function Hello(props){
    return (
        <div className='hello_container'>
            <h1 className='Hello_h1'>Hello World!!</h1>
            <img src={worldImg} alt="world" className='world-img'/>
        </div>
        
    );
}

export default Hello;