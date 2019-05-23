import React from 'react'
import HelloWorld from './HelloWorld.jsx'
import HooksHelloWorld from './HooksHelloWorld.jsx'

class App extends React.Component {
    state = {
        counter: 1
    }

    render() {
        return <div>
            <HelloWorld />
            <HooksHelloWorld />
        </div>
    }
}

export default App