import React from 'react'
import UserList from './UserList.jsx'
import Routes from './Routes.jsx'
import Navbar from './Navbar'
import 'bulma/css/bulma.min.css'

class App extends React.Component {
    render() {
        return <div>
            <section className="section">
                <div className="container">
                    <Navbar />
                    <Routes />
                    <UserList />
                </div>
            </section>
        </div>
    }
}

export default App