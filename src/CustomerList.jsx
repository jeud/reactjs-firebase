import React, { useState } from 'react'
import order from './order.json'
import CustomerListItem from './CustomerListItem'

const customers = order.customers

export default function CustomerList() {
    const [userId, setUserId] = useState(0)

    function handleSelectUser(id) {
        setUserId(id)
    }

    return <div>
        <h3>User: {userId}</h3>

        {customers.map(each => {
            return <CustomerListItem key={each.id} xxx={each} yyy={handleSelectUser} />
        })}
    </div>
}