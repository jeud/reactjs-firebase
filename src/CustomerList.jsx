import React from 'react'
import order from './order.json'
import CustomerListItem from './CustomerListItem'

const customers = order.customers

export default function CustomerList() {
    // coding
    return <div>
        {customers.map(each => {
            return <CustomerListItem key={each.id} xxx={each} />
        })}
    </div>
}