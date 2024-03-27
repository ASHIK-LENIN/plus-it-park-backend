
const express = require('express');
const {  createState, getAllStates } = require('../controller/data');

const router = express.Router();

router.route('/get-all').get(getAllStates)
router.route('/create-state').post(createState)

module.exports = router;