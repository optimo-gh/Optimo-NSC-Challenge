import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../src/pages/home/Home';
import Skillpage from './pages/skillPage/Skillpage';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/skill" component={Skillpage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
