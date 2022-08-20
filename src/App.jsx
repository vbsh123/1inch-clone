import './App.css'
import FarmingPage from './components/farming/farming-page'
import Navbar from './components/layout/navabar'

function App() {
  return (
    <div>
      <div>
          <Navbar></Navbar>
      </div>
      <FarmingPage></FarmingPage>
    </div>
  )
}

export default App
