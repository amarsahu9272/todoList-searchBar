import { useState } from "react";
import { Fragment } from "react";

function Counter() {
    let [count, setCount] = useState(0);

    function Increment() {
        setCount(count++);
    }

    function Decrement() {
        setCount(count--);
    }
    return (
        <Fragment>
            <h1>Counter App</h1>
            <ul>{count}</ul>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </Fragment>
    )
}

export default Counter