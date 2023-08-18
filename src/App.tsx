
import './App.css'
import {Outlet} from "react-router-dom"

function App() {

  return (
  <div>
    <h1>navBar</h1>
    <Outlet/>
    <div>footer</div>
  </div>
  )
}

export default App
