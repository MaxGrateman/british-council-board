import './App.css'
import {Route, Routes} from 'react-router-dom';
import PBSession from "./components/PBSession/PBSession.tsx";
import UOLSession from "./components/UOLSession/UOLSession.tsx";
import Home from "./Home.tsx";

function App() {

  return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/pb-session" element={<PBSession />} />
                <Route path="/uol-session" element={<UOLSession />} />
            </Routes>
        </div>
  )
}

export default App
