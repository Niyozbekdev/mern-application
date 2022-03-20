const { Router } = require('express')
const router = Router()
const { getAllTravels,
        getTravelById,
        addTrevelBook,
        updateTravelBook,
        removeTravelBook } = require('../controlers/travelControlers');


router.get('/', getAllTravels)
router.get('/:id', getTravelById)
router.post('/add', addTrevelBook)
router.put('/:id', updateTravelBook)
router.delete('/:id', removeTravelBook)






module.exports = router