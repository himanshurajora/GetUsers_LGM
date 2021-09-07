import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'


interface User {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}


interface Data {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: User[]
  support: {
    url: string,
    text: string
  }
}

function App() {

  const [data, setdata] = useState<Data>()

  return (
    <div className="App">
      <Navbar setdata={setdata}>
      </Navbar>

      <div className="cards">
        {
          data?.data.map((user) => {
            return <div className="card">
              <div className="left">
                <img src={user.avatar} alt="Profile" />
                <h4 style={{ fontSize: 20 }}>ID : {user.id}</h4>
              </div>
              <div className="right">
                <h4 className="text">Name : {`${user.first_name} ${user.last_name}`}</h4>
                <h4 className="text">Email : {user.email}</h4>
                <h4>_______________________________</h4>
              </div>
            </div>
          })
        }
      </div>

    </div>
  )
}

export default App
