import React from 'react'
import users from './users.json'

export default function UserList() {
    return <div>
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
