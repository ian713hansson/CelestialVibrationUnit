import { useEffect, useState } from "react";
import axios from 'axios'
import ModuleCard from '../components/ModuleCard'

const Explore = () => {
    const [modules, setModules] = useState([])

    useEffect(() => {
        const getModules = async () => {
            const res = await axios.get('http://localhost:3001/api/modules')
            console.log(res.data.modules)
            setModules(res.data.modules) 
            console.log(modules)
        }
        getModules()
    }, [])
   
    if(!modules){
        return <h1>Loading please wait...</h1>
    } else 
    {

    return (
        <div className="modules">
            <h1>Modules</h1>
            <section className="container-grid">
                {modules.map((modules)=>(
                   <div>
                   <ModuleCard
                        key={modules.name}
                        name={modules.name}
                        manufacturer={modules.manufacturer}
                        size={modules.size}
                        function={modules.function}
                        description={modules.description}
                        image={modules.image}
                    />
                    </div>
                ))}
            </section>
        </div>
    )
}
}
export default Explore