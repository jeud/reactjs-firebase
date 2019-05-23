import React, { useState } from 'react'

function Counter() {
    const [counter, setCounter] = useState(0)

    function handleUpdateCounter() {
        setCounter(counter + 1)
    }

    return <div>
        <h3>Counter: {counter}</h3>

        <button onClick={() => setCounter(counter + 1)}>Update</button>
        <button onClick={handleUpdateCounter}>Update</button>
    </div>
}

export default Counter