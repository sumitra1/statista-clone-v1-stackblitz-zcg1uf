import { useState } from 'react'

import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import ContentPage from './components/ContentPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App ">
      <Navbar />
      <ContentPage />
    </div>
  )
}

export default App
