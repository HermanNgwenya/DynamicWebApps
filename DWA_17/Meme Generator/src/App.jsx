import { useState } from 'react'
import { ReactDOM } from 'react-dom'

import Header from "../components/Header"
import Meme from "../components/Meme"

// function App() {

//   return (
//     <>

//     </>
//   )
// }

// export default App
export default function App() {
  return (
      <div>
          <Header />
          <Meme />
      </div>
  )
}
