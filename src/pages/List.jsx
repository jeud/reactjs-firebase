import React, { useState, useEffect } from 'react'
import firebaseApp from '../firebase'

export default function List() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const userCollection = firebaseApp.firestore().collection('users')

        userCollection.get()
            .then(querySnapshot => {
                const users = querySnapshot.docs.map(each => {
                    return {
                        id: each.id,
                        ...each.data()
                    }
                })

                setUsers(users)
            })
    }, [])

    return <div>
        <h3 className="title">List</h3>
    </div>
}