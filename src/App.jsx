import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from "../src/pages/HomePage"
import Workouts from './pages/Workouts';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/workouts" element={< Workouts/>} />
      </Routes>
    </Router>
  )
}
                                                                                            
export default App
