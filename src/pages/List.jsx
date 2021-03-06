import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import firebaseApp from '../firebase'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

export default function List() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const userCollection = firebaseApp.firestore().collection('users')
        const unsubscribe = userCollection.onSnapshot(querySnapshot => {
            const users = querySnapshot.docs.map(each => {
                return {
                    id: each.id,
                    ...each.data()
                }
            })

            setUsers(users)
        })

        return () => {
            unsubscribe()
        }
    }, [])

    function handleDelete(id) {
        Swal.fire({
            title: 'Confirmation',
            text: 'Are you sure ?',
            type: 'info',
            confirmButtonText: 'OK',
            showCancelButton: true
        })
            .then(result => {
                const { value } = result

                if (value) {
                    const userCollection = firebaseApp.firestore().collection('users')
                    userCollection.doc(id).delete()
                        .then(() => {
                            console.log('deleted')
                        })
                }
            })
    }

    return <div>
        <h3 className="title">List</h3>

        {/* <button onClick={handleDelete}>Delete</button> */}

        <table className="table">
            <tbody>
                {users.map(each => {
                    return <tr key={each.id}>
                        <td>{each.id}</td>
                        <td>{each.firstName}</td>
                        <td><Link to={`/edit/${each.id}`} className="button is-warning">Edit</Link></td>
                        <td><button onClick={() => handleDelete(each.id)} className="button is-danger">Delete</button></td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
}