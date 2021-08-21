import './style.css';

function Card(props) {
    return (
        <div>
            {props.title ? (<p className="card">Cluster{props.no}</p>) : (<p className="card">Skill{props.no}</p>)}
        </div>
        
    )
}

export default Card;