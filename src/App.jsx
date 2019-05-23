import React from 'react'

class HelloWorld extends React.Component {
    render() {
        return <div>
            <p>Hello World</p>
        </div>
    }
}

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