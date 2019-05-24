import React, { useState } from 'react'

import firebaseApp from '../firebase'

export default function Login() {
    const [user, setUser] = useState({
        email: 'jeud@hotmail.com',
        password: 'admin12345'
    })

    function handleChange(e) {
        const fieldName = e.target.name

        setUser({
            ...user,
            [fieldName]: e.target.value
        })
    }

    async function handleLogin() {
        try {
            const res = await firebaseApp.auth().signInWithEmailAndPassword(user.email, user.password)

            if (res.user) {
                console.log('logged in')
            }
        } catch (err) {
            console.log('wrong username/password')
        }
    }

    return <div>
        <h3 className="title">Login</h3>

        <div className="field">
            <input type="text" className="input" name="email" onChange={handleChange} defaultValue={user.email} />
        </div>

        <div className="field">
            <input type="password" className="input" name="password" onChange={handleChange} defaultValue={user.password} />
        </div>

        <p><button onClick={handleLogin}>Login</button></p>
    </div>
}