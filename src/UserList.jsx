import React from 'react'
import users from './users.json'

export default function UserList() {
    return <div>
        {users.map(each => {
            return <div key={each.id}>
                <p>{each.name}</p>
                <p>{each.username}</p>
            </div>
        })}
    </div>
}
