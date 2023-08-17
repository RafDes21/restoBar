
import './App.css'
import { About, Bookings, Events, Home, Menu, Place } from './pages'
import { BrowserRouter } from 'react-router-dom'

function App() {
const routes = [
  {
    path:"/",
    component: <Home/>,
    label:'Home'
  },
  {
    path:"/about",
    component: <About/>,
    label:'Nosotros'
  },
  {
    path:"/bookings",
    component: <Bookings/>,
    label:'reservaciones'
  },
  {
    path:"/menu",
    component: <Menu/>,
    label:'menu'
  },
  {
    path:"/events",
    component: <Events/>,
    label:'eventos'
  },
  {
    path:"/place",
    component: <Place/>,
    label:'lugar'
  },
]

  return (
 <BrowserRouter>
 
 </BrowserRouter>
  )
}

export default App
