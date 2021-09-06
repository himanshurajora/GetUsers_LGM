import React, { useState } from 'react'
import './Navbar.css'



export default function Navbar() {

    const [loading, setloading] = useState(true);

    return <div className="navbar">
        <div className="sec">
            <div className="left">Get Users</div>
            <div className="right">
                <button disabled={loading}>{loading ? <div className="loader"></div> : "Load"}</button>
            </div>
        </div>
    </div>
}