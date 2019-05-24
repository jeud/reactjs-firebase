import React, { useState } from 'react'

export default function Create() {
    const [user, setUser] = useState({})

    function handleChange(e) {
        const fieldName = e.target.name

        setUser({
            [fieldName]: e.target.value
        })

        console.log(user)
    }

    return <div>
        <h3 className="title">Create</h3>

        <div className="field">
            <input onChange={handleChange} type="text" className="input" name="firstName" />
        </div>

        <div className="field">
            <input onChange={handleChange} type="text" className="input" name="lastName" />
        </div>

        <p><button className="button">Save</button></p>
    </div>
}