import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from "../src/pages/HomePage"
import Workouts from './pages/Workouts';
import Signup from './pages/Signup';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/workouts" element={< Workouts/>} />
        <Route path="/signup" element={< Signup/>} />
      </Routes>
    </Router>
  )
}
                                                                                            
export default App
