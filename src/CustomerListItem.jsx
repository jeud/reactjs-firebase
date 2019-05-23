import React from 'react'

import male from './images/male.png'
import female from './images/female.png'

export default function CustomerListItem(props) {
    const each = props.xxx
    const gender = each.gender ? male : female

    return <div>
        <p>{each.first_name}</p>
        <img src={gender} alt="" />
        <button onClick={() => props.yyy(each.id)}>Select {each.id}</button>
    </div>
}