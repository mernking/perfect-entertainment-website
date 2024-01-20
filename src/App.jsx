import Events from './moderator/Events'
import Airbnb from './moderator/Airbnb'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Welcom from './components/Welcom'
import Profile from "./moderator/Profile"
import Login from './admin/Login'
import Signup from './admin/Signup'
import Authorise from './admin/Authorise'

function App() {

  return (
    <div className="all text-text bg-background">
      <div className="nav-menue">
        <Navbar />
      </div>
      <div className="routes_router">
        <Routes>
          <Route path='/' element={<Welcom/>} />
          <Route path='/events' element={<Authorise>{<Events />}</Authorise>} />
          <Route path='/airbnb' element={<Authorise>{<Airbnb />}</Authorise>} />
          <Route path='/profile' element={<Authorise>{<Profile />}</Authorise>} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export default App
