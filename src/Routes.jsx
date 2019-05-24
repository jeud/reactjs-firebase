import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import authContainer from './AuthContainer'
import Create from './pages/Create'
import List from './pages/List'
import Edit from './pages/Edit'
import Login from './pages/Login'

function ProtectRoute(props) {
    // const { isAuth = false } = props
    // const isAuth = true
    console.log(authContainer.state.isAuth)
    const isAuth = authContainer.state.isAuth
    const { component: Component } = props

    return isAuth ? <Component /> : <Redirect to="/login" />
}

export default function Routes(props) {
    return <div>
        <Switch>
            <Route path="/" exact component={Create} />
            {/* <Route path="/list" component={List} /> */}
            <ProtectRoute path="/list" component={List} />
            <Route path="/edit/:id" component={Edit} />
            <Route path="/login" component={Login} />
        </Switch>
    </div>
}