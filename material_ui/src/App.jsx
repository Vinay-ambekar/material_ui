import { Link } from "react-router-dom"
import Routing from './Routing/Routing.jsx'

function App() {

  return (
    <>
    <center> <h1>meterial ui</h1>
    <nav style={{display:'flex',gap:'10px'}}>
      <Link to="/button">Buttons</Link>
      <Link to="/buttonGroups">Buttons Groups</Link>
      <Link to="/checkbox">Check box</Link>
      <Link to="/radiobutton">Radio button</Link>
      <Link to="/slider">Slider</Link>
    </nav>
    <Routing></Routing>
    </center>
    </>
  )
}

export default App
