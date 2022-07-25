import './App.css';
import { Route, Routes } from 'react-router-dom'





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

export default App;
