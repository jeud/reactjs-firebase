import React from 'react'
import { Link } from 'react-router-dom'

import firebaseApp from './firebase'

export default function Navbar(props) {

    function handleLogout() {
        firebaseApp.auth().signOut()
    }

    return <div>
        <Link to="/">Create</Link>&nbsp;|&nbsp;
        <Link to="/list">List</Link>&nbsp;|&nbsp;

        {props.isAuth
            && <p>
                <button onClick={handleLogout} className="button is-danger">Logout</button>
            </p>
        }
    </div>
}