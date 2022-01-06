import './IfoodCounter.css';
import { useState, useEffect } from 'react';
import { number } from 'prop-types';

const IfoodCounter = ( {initialValue} ) => {
    const [Value, setValue] = useState(initialValue ? initialValue : 0);
    const [buttonStyle, setButtonStyle] = useState('counter-button-minus-active');


    useEffect( () => {
        if (Value > 0){
            setButtonStyle('counter-button-minus-active');
        }else{
            setButtonStyle('counter-button-minus-inactive');
        }
    
    }, [Value]);


    function Aumentar(){
        setValue(Value+1);
    }

    function Diminuir(){
        if (Value <= 1) {
        }

        if (Value > 0){
            setValue(Value-1);
        }
    }

    return (
        <div className='context-wrapper'>
            <button aria-label="Decrease" className={buttonStyle} onClick={Diminuir}>-</button>
            <p>{Value}</p>
            <button aria-label="Increase" className='counter-button-plus-active' onClick={Aumentar}>+</button>
        </div>
    )
}

IfoodCounter.prototype = {
    initialValue: number
};

export default IfoodCounter;

