import NavBar from './Navbar'
import Homepage from './Homepage'
import { HashRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/home" component={Homepage} />
      </div>
    </Router>
  );
}

export default App;
