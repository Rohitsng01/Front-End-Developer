import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Header from "./component/Header";
import Home from "./component/Home"
import Footer from "./component/Footer"
import Contact from "./component/Contact"
import Services from "./component/Services"



import './style/app.scss'
import './style/header.scss'
import './style/Home.scss'
import './style/Footer.scss'
import './style/Contact.scss'
import './style/media.scss'

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path= "/" element={<Home/>}/>
          <Route path= "/Contact" element={<Contact/>}/>
          <Route path= "/Services" element={<Services/>}/>
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
