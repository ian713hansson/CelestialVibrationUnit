const ModuleCard = (props) => {

    return (
        <div className="card module-card" onClick={(props.onClick)}>

            <div className="img-wrapper">
                <img src={props.image} alt={props.name}/>
            </div>
                <h2>{props.name}</h2>
                <h3>{props.manufacturer}</h3>
                <h3>{props.function}</h3>
                <h3>{props.size}</h3>
                <p>{props.description}</p>
        </div>
    )
}

export default ModuleCard
