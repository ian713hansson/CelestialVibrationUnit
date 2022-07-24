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
            name: 'Mimeophon',
            manufacturer: 'Make Noise',
            function: ['Delay', 'Effect', 'Dual/Stereo', 'Sampling', 'Digital'],
            size: '16 HP',
            image: '',
            description: 'The Mimeophon, from Greek mimeo (repeat/copy) and phon (sound), is a modern take on various historical sound copying, echo and repeating devices. It allows for Stereo modulations of Time, Space and Timbre of Mono or Stereo sound sources, and is capable of modulating and morphing time scales of repeated sound from micro-sound to not to phrase length while also coloring and spatializing the repeats. Basically it will take what you throw at it and let you run wild and lose yourself in a swirling universe you have created, are inhabiting and quite frankly stuck in...'
        },
        {
            name: 'arbhar',
            manufacturer: 'Instruo',
            function: ['Oscillator', 'Sampling', 'Effect', 'Delay', 'Digital', 'Dual/Stereo', 'Pitch Shifter', 'Reverb', 'Granular Synth'],
            size: '18 HP',
            image: '',
            description: 'The arbhar is a granular processor in which sampled audio can be chopped into tiny grains, scattered, shaped, re-pitched, reversed and layered for an endless range of audio manipulation from seamless frozen tones to mutated acousmatic madess. Features a condesnor microphone set into the front panel, built in audio analysis for automatic sampling and internal modulation over various parameters. Personally, I have never heard anything like what this module can produce, and I use it at every chance I get.'
        },
        {
            name: 'Pamela`s NEW Workout',
            manufacturer: 'ALM Busy Circuits',
            function: ['Clock Generator', 'Digital', 'LFO', 'Clock Modulator', 'Random', 'Sequencer', 'Envelope Generator', 'Quantizer'],
            size: '8 HP',
            image: '',
            description: 'Pam`s is a compact programmable clocked modulation source which provides 8 highly editable outputs producing various control voltage signals correlated and synced to a BPM based master clock that runs from 10-300 BPM giving this little module the power to be the brains of a patch as large as you can dream up.'
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