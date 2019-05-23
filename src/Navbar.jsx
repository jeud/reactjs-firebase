import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return <div className="box">
        <Link to="/">Home</Link>&nbsp;|&nbsp;
        <Link to="/about">About</Link>&nbsp;|&nbsp;
        <Link to="/contact">Contact</Link>&nbsp;|&nbsp;
    </div>
}