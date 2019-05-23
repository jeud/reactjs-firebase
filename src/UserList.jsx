import React, { useState } from 'react'
import axios from 'axios'

export default function UserList() {
    const [users, setUsers] = useState([])
    const [u, setU] = useState({})

    async function handleSetUsers() {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(res.data)
    }

    function handleChange(e) {
        setU({
            name: e.target.value
        })
    }

    function handleAddUser() {
        const newUsers = [...users, u]

        setUsers(newUsers)
    }

    return <div>
        <input className="input" onChange={handleChange} type="text" name="name" placeholder="Name" />
        <pre>{JSON.stringify(u)}</pre>
        <button className="button is-primary" onClick={handleAddUser}>Add User</button>

        <button className="button is-danger" onClick={handleSetUsers}>Get Users</button>
        <hr />
        <table border="1">
            {users.map(each => {
                return <tr key={each.id}>
                    <td>{each.name}</td>
                    <td>{each.username}</td>
                </tr>
            })}
        </table>
    </div>
}
