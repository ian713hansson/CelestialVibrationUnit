const Module = require('../models/module');
const { db } = require('mongodb') 
//working
const createModule = async (req, res) => {
    try {
        const newModule = await new Module(req.body)
        await newModule.save()
        return res.status(201).json({
            newModule, 
        });
    } catch (error) { 
        throw error
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
// const updateObject = async (req, res) => {
//     try {
//         //making sure we have the right object
//         const objectId = req.params.objectId
//         //creating a new object that is being updated via the body of the request
//         const updatedObject = await Object.update(req.body, {
//             //targeting the specific object by its id
//             where: {id: objectId},
//             //sending back the updated version
//             returning: true
//         })
//         res.send(updatedObject)
//     }
//     catch(error){
//         throw error
//     }
// }

//This works

const updateModule = async (req, res) => {
    try {
        const module = await Module.findByIdAndUpdate(req.params.id, req.body, { new: true})
        res.status(200).json(module)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
// const deleteObject = async (req,res) => {
//     try{
//         //make sure we are targeting the correct object
//         const objectId = req.params.objectId
//         //how to destroy objects
//         await Object.destroy({where: {id: objectId}})
//         //a success message telling us we've destroyed the correct object
//         res.send({msg: `object with ID ${objectId} deleted`})
//     }
//     catch(error){
//         throw error
//     }
// }

//This works
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