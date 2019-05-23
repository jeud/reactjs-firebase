import React, { useState } from 'react'
// import users from './users.json'
import axios from 'axios'

export default function UserList() {
    const [users, setUsers] = useState([])

    async function handleSetUsers() {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(res.data)
    }

    return <div>
        <button onClick={handleSetUsers}>Get Users</button>
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
