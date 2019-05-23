import React from 'react'
import HelloWorld from './HelloWorld.jsx'

class App extends React.Component {
    state = {
        counter: 1
    }

    render() {
        return <div>
            <HelloWorld />
        </div>
    }
}

export default App