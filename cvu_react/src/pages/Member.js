import axios from 'axios'
import React, { useState } from 'react'

function Member () {
    const initialState = 
    { 
        name: '', 
        manufacturer: '', 
        function: [], 
        size: '', 
        description: ''
    }

    const [formState, setFormState] = useState(initialState)

    const handleChange = event => {
        setFormState({ ...formState, [event.target.id]: event.target.value })
    }


    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(formState)

        let res = await axios.post('http://localhost:3001/api/modules', formState)
        console.log(res)
        setFormState(initialState)
    }



    return (
        <div className='member-form'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name of Module</label>
                <input type="text" id='name' onChange={handleChange} value={formState.name}/>
                <label htmlFor='manufacturer'>Name of Manufacturer</label>
                <input type='text' id='manufacturer' onChange={handleChange} value={formState.manufacturer}/>
                <label htmlFor='function'>Functions of Module</label>
                <select id='function' onChange={handleChange} value={formState.function}>
                    <option value='oscillator'>Oscillator</option>
                    <option value='utility'>Utility</option>
                    <option value='effect'>Effects</option>
                    <option value='filter'>Filter</option>
                    <option value='sequencer'>Sequencer</option>
                    <option value='envelope'>Envelope</option>
                    <option value='vca'>VCA</option>
                </select>
                <label htmlFor='size'>How many HP?</label>
                <input type='text' id='size'onChange={handleChange} value={formState.size}/>
                <label htmlFor='image'>Put image url here</label>
                <input type='text' id='image'onChange={handleChange} value={formState.image}/>
                <label htmlFor='description'>Tell me about it</label>
                <textarea id='description' cols='30' rows='10'onChange={handleChange} value={formState.description}></textarea>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}


export default Member