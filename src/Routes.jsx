import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

function PageNotFound() {
    return <div>
        <h3 className="title">404</h3>
    </div>
}

export default function Routes() {
    return <div className="box">
        <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/" exact component={Home} />
            <Route path="*" component={PageNotFound} />
        </Switch>
    </div>
}