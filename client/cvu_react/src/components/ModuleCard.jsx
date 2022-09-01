import axios from 'axios'
import React, { useState } from 'react'

const ModuleCard = (props) => {
console.log(props)


    const [formState, setFormState] = useState('')

    const handleChange = event => {
        setFormState({ ...formState, [event.target.id]: event.target.value })
    }
    const handleReview = async (event) => {
        event.preventDefault()
        console.log(formState)
        try{
        let res = await axios.put(`https://celestial-vibes.herokuapp.com/api/modules/${props.id}`, formState)
        console.log(res)
        setFormState('')
        window.location.reload()
    }

        catch (error){
            throw error
        } 
        
    }

const deleteModule = async (id) => {
    console.log('hello', props.id, props.name)
    await axios.delete(`https://celestial-vibes.herokuapp.com/api/modules/${props.id}`)
    
    console.log('module deleted')
    
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
                <p>{props.review}</p>
                <button onClick={()=>deleteModule(props.id, window.location.reload())}>Delete</button>
                
        <div className='review-form'>
            <form onSubmit={handleReview}>
                <label htmlFor='review'>Review this module and tell us your name...</label>
                <textarea id='review' cols='80' rows='10'onChange={handleChange} value={formState.review}></textarea>
                <button type='review'>Review</button>
            </form>
        </div>


        </div>
    )
}

export default ModuleCard
