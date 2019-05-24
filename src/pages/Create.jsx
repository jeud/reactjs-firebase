import React, { useState } from 'react'
import firebaseApp from '../firebase'

export default function Create() {
    const [user, setUser] = useState({})

    function handleChange(e) {
        const fieldName = e.target.name

        setUser({
            ...user,
            [fieldName]: e.target.value
        })
    }

    async function handleUpdate() {
        const userCollection = firebaseApp.firestore().collection('users')

        try {
            const documentRef = await userCollection.add(user)
            console.log(documentRef.id)
        } catch (err) {
            console.log(err.message)
        }
    }

    return <div>
        <h3 className="title">Create</h3>

        <div className="field">
            <input onChange={handleChange} type="text" className="input" name="firstName" />
        </div>

        <div className="field">
            <input onChange={handleChange} type="text" className="input" name="lastName" />
        </div>

        <p><button onClick={handleUpdate} className="button">Save</button></p>
    </div>
}