import React, {useState} from 'react';
import "./staail/counter.css";
const Counter = function () {
    const [count, setCount] = useState(0)
    const [countu, setCountu] = useState(0)

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCountu(countu + 1)
    }

    return (
        <div className='like'>
            <div className='skrin'>
                <button className="cnopka bor" onClick={decrement}><h1>+</h1></button>
                <div className="cloc "><h1>{+countu}</h1></div>
            </div>
            <div className="button">
                <div className="cloc "><h1>{-count}</h1></div>
                <button className="cnopka color" onClick={increment}><h1>-</h1></button>
            </div>
        </div>
    )
}

export default Counter;