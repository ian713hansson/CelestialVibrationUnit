import axios from 'axios'


const ModuleCard = (props) => {
console.log(props)

const deleteModule = async (id) => {
    console.log('hello', props.id, props.name)
    await axios.delete(`http://localhost:3001/api/modules/${props.id}`)
    console.log('module deleted')
}

const handleUpdate = async () => {
    const { name, manufacturer, size, description } = (props)
    axios.put(`http://localhost:3001/api/modules/${props.id}`, {
        name: {name},
        manufacturer: {manufacturer},
        size: {size},
        description: {description}
    })
}



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
                <button onClick={()=>deleteModule(props.id)}>Delete</button>
                <button onClick={handleUpdate}>Update</button>


        </div>
    )
}

export default ModuleCard
