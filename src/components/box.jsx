/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

const box = () => {
    const [count, setCount] = useState(0)

    const handleCount = () =>{
            const newCount = count + 1;
            setCount(newCount)
    }
    return (
        <div>
            <p>count {count}</p>
            <button type="button" onClick={handleCount}>count</button>
        </div>
    );
};

export default box;