const Module = require('../models/module');

const createModule = async (req, res) => {
    try {
        const module = await new Module(req.body)
        await module.save()
        return res.status(201).json({
            module,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}


//this works


const getAllModules = async (req, res) => {
    try{
        const modules = await Module.find()
        return res.status(200).json({ modules })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
// this is working

const getModuleById = async (req, res) => {
    try {
        const { id } = req.params
        const module = await Module.findById(id)
        if (module) {
            return res.status(200).json({ module })
        }
        return res.status(404).send('Module with this id does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const updateModule = async (req, res) => {
    try {
        const module = await Module.findByIdAndUpdate(req.params.id, req.body, { new: true})
        res.status(200).json(module)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteModule = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Module.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Module deleted')
        }
        throw new Error('Module not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}



module.exports = {
    createModule,
    getAllModules,
    getModuleById,
    updateModule,
    deleteModule
}