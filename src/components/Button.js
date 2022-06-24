//this thing needs to be bigger and look nicer
import React from 'react';
import './Button.css';
var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);
root.style.setProperty('--pressDist',3)
console.log(rootStyles.getPropertyValue('--pressDist'))


class Button extends React.Component {
    constructor(props){
        super(props)
        this.state={
            pressed: false,
            symbol: '⏏'
        }
    }
    
    render() {
        return ( 
            <button className="play" onMouseUp={() => {this.state.pressed=false}} onMouseDown={() => {this.state.pressed=true}}>
                {this.state.symbol}
            </button> 
        );
    };
};

export default Button;