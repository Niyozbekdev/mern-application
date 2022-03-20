
const Travel = require('../models/TravelModul')

//Metod :    Get
//desc:      Get all travels books
const getAllTravels = async (req, res) => {
    try {
        const travels = await Travel.find()
        res.status(200).json({
            message: 'success',
            travels: travels.reverse()
        })
    } catch (err) {
        console.log(err)
    }
}


//Metod :    Get
//desc:      Get one travels book by id
const getTravelById = async (req, res) => {
    try {
        const travel = await Travel.findById(req.params.id)

        if(!travel){
            return res.status(404).json({
                message: 'Not found'
            })
        }

        return res.status(200).json({
            message: 'success',
            travel
        })


    } catch (err) {
        console.log(err)
    }
}

//Metod:    Post
//desc:      Add new trevel book
const addTrevelBook = async (req, res) => {
    try {
        const { title, image, descr } = req.body
        
        const newTravel = await Travel.create({
            title,
            image,
            descr
        })

        res.status(201).json({
            message: 'succes',
            newTravel
        })
    } catch (err) {
        console.log(err)
    }
}


//Metod:     Put
//desc:      Edit travel book by its ID
const updateTravelBook = async (req, res) => {
    try {
        const { title, image, descr } = req.body
        
        const updatedTravel = await Travel.findByIdAndUpdate(req.params.id, {
            title,
            image,
            descr
        })

        res.status(200).json({
            message: 'succes',
            updatedTravel
        })
    } catch (err) {
        console.log(err)
    }
}



//Metod:     Delete
//desc:      Removeing travel book by id
const removeTravelBook = async (req, res) => {
    try {
       await Travel.findOneAndRemove(req.params.id)

        res.status(200).json({
            message: 'Deleted'
        })
    } catch (err) {
        console.log(err)
    }
}


module.exports = {
    getAllTravels,
    getTravelById,
    addTrevelBook,
    updateTravelBook,
    removeTravelBook
}