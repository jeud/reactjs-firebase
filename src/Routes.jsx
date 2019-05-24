import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Create from './pages/Create'
import List from './pages/List'
import Edit from './pages/Edit'
import Login from './pages/Login'

export default function Routes() {
    return <div>
        <Switch>
            <Route path="/" exact component={Create} />
            <Route path="/list" component={List} />
            <Route path="/edit/:id" component={Edit} />
            <Route path="/login" component={Login} />
        </Switch>
    </div>
}