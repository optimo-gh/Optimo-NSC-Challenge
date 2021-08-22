import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../src/pages/home/Home";
import SkillsFam from "./pages/skillPage/SkillsFam";
import Skill from "./pages/skillPage/Skill";

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/skills' component={SkillsFam} />
          <Route exact path='/skills/skill' component={Skill} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
