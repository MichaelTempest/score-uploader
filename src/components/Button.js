//this thing needs to be bigger and look nicer
import './Button.css';

function Button() {
    var play = '⏏'
    return ( 
        <button className="play" onClick={() => {console.log('click')}}>
            {play}
        </button> 
    );
}

export default Button;