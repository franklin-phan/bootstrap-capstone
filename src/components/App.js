import NavBar from './Navbar'
import Homepage from './Homepage'
import Join from './Form'
import Channels from './Channels'
import ControlledCarousel from './Carousel'
import Tables from './Table'
import { HashRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/home" component={Homepage} />
        <Route exact path="/channels" component={Channels} />
        <Route exact path="/photos" component={ControlledCarousel} />
        <Route exact path="/roles" component={Tables} />
        <Route exact path="/join" component={Join} />
      </div>
    </Router>
  );
}

export default App;
