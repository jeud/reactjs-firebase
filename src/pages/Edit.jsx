import React, { useEffect, useState } from 'react'
import firebaseApp from '../firebase'

export default function Edit(props) {
    const [user, setUser] = useState({})

    useEffect(() => {
        const userCollection = firebaseApp.firestore().collection('users')

        userCollection.doc(props.match.params.id).get()
            .then(documentSnapshot => {
                setUser(documentSnapshot.data())
            })
    }, [])

    function handleChange(e) {
        const fieldName = e.target.name

        setUser({
            ...user,
            [fieldName]: e.target.value
        })
    }

    async function handleUpdate() {
        const userCollection = firebaseApp.firestore().collection('users')

        await userCollection.doc(props.match.params.id).set(user)
        console.log('Saved')
    }

    return <div>
        <h3 className="title">Edit</h3>

        <div className="field">
            <input type="text" className="input" name="firstName" defaultValue={user.firstName} onChange={handleChange} />
        </div>

        <div className="field">
            <input type="text" className="input" name="lastName" defaultValue={user.lastName} onChange={handleChange} />
        </div>

        <p><button onClick={handleUpdate} className="button">Save</button></p>
    </div>
}