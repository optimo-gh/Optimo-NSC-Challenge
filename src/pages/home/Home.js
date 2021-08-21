import { NavLink } from "react-router-dom";
import "./style.css";
import logo from "../../images/OptimoLogo.png";
function Home() {
  return (
    <div className='home'>
      <img className='logo' src={logo} alt='logo' />
      <h1>
        Are you a fresh worker who want to decide your first job or you want a
        career transtion?
      </h1>
      <div className='buttons'>
        <NavLink to='/skill'>
          <button>Look for first job</button>
        </NavLink>
        <NavLink to='/skill'>
          <button>Career transition</button>
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
