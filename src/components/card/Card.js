import './style.css';

function Card(props) {
    return (
        <div>
            {props.title ? (<p className="card">Cluster</p>) : (<p className="card">Skill</p>)}
        </div>
        
    )
}

export default Card;