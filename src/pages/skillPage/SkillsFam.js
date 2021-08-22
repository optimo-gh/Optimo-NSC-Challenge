import { NavLink } from 'react-router-dom';
import Card from '../../components/card/Card';
import './style.css';

function SkillsFam() {
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    
    return (
        <div>
            <h1>Occupation Profile</h1>
            <h5>Choose a Skill Cluster Family</h5>
            <div className="container">
                {cards.map((card, index) => {
                    return (
                        <div>
                            <NavLink className="navlink" to="/skills/skill">
                                <Card 
                                    key={index} 
                                    no={card.index}
                                    title="skills"
                                />
                            </NavLink>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default SkillsFam;