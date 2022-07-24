const db = require('../db')
const Module = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error...'))

const main = async () => {
    const module = [
        {
            name: 'Ensemble Oscillator',
            manufacturer: '4ms Company with Matthias Puech',
            function: ['Oscillator','Frequency Modulation', 'Wavefolding', 'Phase distortion'],
            size: '16 HP',
            image: '',
            description: 'This module is a unified polyphonic voice of sixteen complex oscillators combining additive FM, phase-distortion and wavefolding synthesis together to create a sound which can be both lush and beautiful, and texturally intense. With 10 points of modulation possible, the user can get lost in a swirling universe full of textures and rich harmonics.'
        },
        {
            name: 'Mutamix',
            manufacturer: 'Intellijel',
            function: ['Attenuator', 'Mixer', 'Sequencer', 'Switch'],
            size: '18 HP',
            image: '',
            description: 'A great little mixer here that can take 6 audio or cv inputs which can individually be assigned to one of three bus outputs for routing or audio sending. Features a control called X-mode which turns the Mutamix into a hybrid between a mixer and a sequencer.  Very solid utility model to help reign in the stardust.'
        },
        {
            name: 'Maths',
            manufacturer: 'Make Noise',
            function: ['Attenuator', 'CV Modulation', 'Envelope Follower', 'Envelope Generator', 'Function Generator', 'LFO', 'Logic', 'Slew Limiter'],
            size: '20 HP',
            image: '',
            description: 'The module everyone needs, and most everyone has. This has been by far the most popular module for many years and there is no doubt why. It is described by its makers as an analog computer designed for musical purposes...`MATHS builds on the tradition set into motion in the 1960s when Don Buchla adapted circuits found within analog computers for musical purposes. Buchla`s Algebraic Processor, Model 257 and 281 changed the way music synthesizers utilize control voltages. MATHS continues this great tradition - sculpting the voltages we use to sculpt sounds.`'
        },
        {
            name: 'Starlab',
            manufacturer: 'Strymon',
            function: ['Digital', 'Dual/Stereo', 'Effect', 'Filter', 'Reverb', 'Synth Voice', 'Delay'],
            size: '28 HP',
            image: '',
            description: 'Strymon always know how to access the cosmos in a beautiful way. This beautiful module is not just a sparkly and incredibly lush cavernous reverb, but enhances sounds with chorus, flanging and modulated delays. In addition to being an extremely advanced Karplus-Strong String synthesis module capable of travelling over 8 octaves. Starlab truly is a rocketship. '
        },
        {
            name: '',
            manufacturer: '',
            function: [],
            size: '',
            image: '',
            description: ''
        },
        {
            name: '',
            manufacturer: '',
            function: [],
            size: '',
            image: '',
            description: ''
        }
    ]
}