import React, { useEffect } from 'react'
import 'bulma/css/bulma.min.css'

import Navbar from './Navbar'
import Routes from './Routes'

// import firebaseApp from './firebase'

export default function App() {
    useEffect(() => {
        // console.log(firebaseApp)
    }, [])

    return <div>
        <section className="section">
            <div className="container">
                <h3 className="title">App</h3>
                <hr />
                <Navbar />
                <hr />
                <Routes />
            </div>
        </section>
    </div>
}