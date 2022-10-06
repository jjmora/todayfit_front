import React, { useState, useEffect } from 'react'
import { ApiContext } from '../contexts/ApiContext'
import axios from 'axios'

function Store({ children }) {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      //.get('https://jsonplaceholder.typicode.com/users')
      .get('https://admin.jjmdev.xyz/api/partners?page=1')
      .then((res) => {
        setData(res.data["hydra:member"])
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <ApiContext.Provider value={[data, setData]}>
      {children}
    </ApiContext.Provider>
  )
}
export default Store