import './App.css';
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Explore from './pages/Explore'
import Listen from './pages/Listen'
import Member from './pages/Member'
import Header from './components/Header'
import Home from './pages/Home'





function App() {
  return (
   <div>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/explore" element={<Explore />}/>
        <Route path="/listen" element={<Listen />}/>
        <Route path="/member" element={<Member />}/>
      </Routes>
    </main>
   </div>
  )
}

export default App
