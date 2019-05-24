import React, { useEffect, useState } from 'react'
import 'bulma/css/bulma.min.css'

import firebaseApp from './firebase'
import Navbar from './Navbar'
import Routes from './Routes'

export default function App() {
    const [isAuth, setAuth] = useState(false)

    useEffect(() => {
        const unsubscribe = firebaseApp.auth().onAuthStateChanged(user => {
            if (user) {
                console.log('logged in...')
                setAuth(true)
            } else {
                console.log('logout')
                setAuth(false)
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
                <Navbar isAuth={isAuth} />
                <hr />
                <Routes />
            </div>
        </section>
    </div>
}