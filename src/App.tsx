import './App.css'
import { Sidebar } from './components/Sidebar'
import { v4 as uuidv4 } from "uuid";
uuidv4();


function App() {

  return (
    <>
      <Sidebar/>
    </>
  )
}

export default App