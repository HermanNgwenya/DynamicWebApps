import { React } from 'react'
import { ReactDOM } from 'react'
import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "../data"

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })        
        

    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}

// function App() {

//   return (
//     <>
// <Card
// key={item.id}
// item={item}
// />

//      </>
//    )
// return (
//   <div>
//       <Navbar />
//       <Hero />
//       <section className="cards-list">
//           {cards}
//       </section>
//   </div>
// )
//  }

//  export default App
