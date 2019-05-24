import React, { useEffect } from 'react'
import 'bulma/css/bulma.min.css'

import firebaseApp from './firebase'
import Navbar from './Navbar'
import Routes from './Routes'

export default function App() {
    useEffect(() => {
        const unsubscribe = firebaseApp.auth().onAuthStateChanged(user => {
            if (user) {
                console.log('logged in')
            } else {
                console.log('logout')
            }
        })

        return () => {
            unsubscribe()
        }
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