import React from 'react'

import male from './images/male.png'
import female from './images/female.png'

export default function CustomerListItem(props) {
    const each = props.xxx
    const gender = each.gender ? male : female

    return <div>
        return <div>
            <img src={each.gender == 'M' ? male : female} alt="" />
            <img src={gender} alt="" />
        </div>
    </div>
}