import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return <div>
        <Link to="/">Create</Link>&nbsp;|&nbsp;
        <Link to="/list">List</Link>&nbsp;|&nbsp;
    </div>
}