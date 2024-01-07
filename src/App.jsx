import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [id, setId] = useState(1)
  const [data, setDATA] = useState("")

  useEffect(() => {
    const apiHandler = async () => {
      const { data } = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
      setDATA(data)
      console.log(data)
    }
    apiHandler()
  }, [id])

  return (
    <>
      <div>
        <label>ENTER ID </label>
        <input type='text'  onChange={(e) => setId(e.target.value) } />
      </div>
      <div>
        {data.todo?.id}
      </div>
      <div>
        {data.todo?.title}
      </div>
      <div>
        {data.todo?.description}
      </div>
    </>
  )
}

export default App
