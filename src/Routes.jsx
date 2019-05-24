import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Create from './pages/Create'

export default function Routes() {
    return <div>
        <Switch>
            <Route path="/" component={Create} />
        </Switch>
    </div>
}