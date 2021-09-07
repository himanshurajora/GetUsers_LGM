import React, { useState } from 'react'
import './Navbar.css'



export default function Navbar(props: any) {

    const [loading, setloading] = useState(false)

    const storeData = async () => {
        setloading(true)

        var res = await fetch("https://reqres.in/api/users?page=1")
        var data  = await res.json()
        console.log(data)
        props.setdata(data)
        setloading(false)
    }

    return <div className="navbar">
        <div className="sec">
            <div className="left">Get Users</div>
            <div className="right">
                <button disabled={loading} onClick={() => {
                  storeData()
                }}>{loading ? <div className="loader"></div> : "Load"}</button>
            </div>
        </div>
    </div>
}