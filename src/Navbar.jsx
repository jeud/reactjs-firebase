import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return <div>
        <Link to="/">Create</Link>&nbsp;|&nbsp;
        <Link to="/list">List</Link>&nbsp;|&nbsp;

        {props.isAuth
            && <p>
                <button className="button is-danger">Logout</button>
            </p>
        }
    </div>
}