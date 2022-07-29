import axios from 'axios'
import React, { useState } from 'react'

function Member () {
    const initialState = 
    { 
        name: '', 
        manufacturer: '', 
        function: '', 
        size: '', 
        image: '',
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
            <form className='member-input' onSubmit={handleSubmit}>
                <label htmlFor='name'>Name of Module</label>
                <input type="text" id='name' onChange={handleChange} value={formState.name}/>
                <label htmlFor='manufacturer'>Name of Manufacturer</label>
                <input type='text' id='manufacturer' onChange={handleChange} value={formState.manufacturer}/>
                <label htmlFor='function'>Functions of Module</label>
                <select id='function' onChange={handleChange} multiple={false} value={formState.function}>
                    <option value='Oscillator'>Oscillator</option>
                    <option value='Utility'>Utility</option>
                    <option value='Effect'>Effects</option>
                    <option value='Filter'>Filter</option>
                    <option value='Sequencer'>Sequencer</option>
                    <option value='Envelope'>Envelope</option>
                    <option value='VCA'>VCA</option>
                    <option value='Synth Voice'>Synth Voice</option>
                </select>
                <label htmlFor='size'>How many HP?</label>
                <input type='text' id='size'onChange={handleChange} value={formState.size}/>
                <label htmlFor='image'>Put image url here</label>
                <input type='text' id='image'onChange={handleChange} value={formState.image}/>
                <label htmlFor='description'>Tell me about it</label>
                <textarea id='description' cols='30' rows='10'onChange={handleChange} value={formState.description}></textarea>
                <button type='submit'>Submit</button>
            </form>
            <div className='member-img'>
                <img className='member-overlay' src='https://i.imgur.com/Iil85d3.jpg' />
            </div>
        </div>
    )
}


export default Member