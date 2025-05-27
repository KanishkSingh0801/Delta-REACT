import React from 'react';
import { useState } from 'react';

function Counter() {
    let [count, setCount] = useState(0);

    let inCount = () => {
        setCount(count+1);
    };
    return ( 
        <div>
            <h3>Count = {count}</h3>
            <button onClick={inCount}>Increment</button> 
        </div>
     );
}

export default Counter;