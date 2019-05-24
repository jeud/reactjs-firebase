import React from 'react'
import { Link } from 'react-router-dom'
import { Subscribe } from 'unstated'

import firebaseApp from './firebase'
import authContainer from './AuthContainer'

export default function Navbar(props) {

    function handleLogout() {
        firebaseApp.auth().signOut()
    }

    console.log('yyy', authContainer.state.isAuth)

    return <div>
        <Subscribe to={[authContainer]}>
            {container => {
                return <div>
                    <Link to="/">Create</Link>&nbsp;|&nbsp;
                    <Link to="/list">List</Link>&nbsp;|&nbsp;

                    {container.state.isAuth
                        && <p>
                            <button onClick={handleLogout} className="button is-danger">Logout</button>
                        </p>
                    }
                </div>
            }}
        </Subscribe>
    </div>
}