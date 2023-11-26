import express from 'express'
import { getAllProperties, getProperty, createProperty, updateProperty, deleteProperty, searchProperties, getFeaturedProperties } from '../controllers/propertyController.js'
import { verifyManagerOrAdmin } from '../middlewares/verifyManagerOrAdmin.js'

const router = express.Router()

// Routes and Controllers
router.route('/all')
    .get(getAllProperties)

router.route('/search')
    .get(searchProperties)

router.route('/create')
    .post(verifyManagerOrAdmin, createProperty)

router.route('/featured')
    .get(getFeaturedProperties)

router.route('/:propertyId')
    .get(getProperty)
    .patch(verifyManagerOrAdmin, updateProperty)
    .delete(verifyManagerOrAdmin, deleteProperty)


export default router;