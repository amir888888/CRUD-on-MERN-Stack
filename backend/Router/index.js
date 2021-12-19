const express = require('express');
const { getNames, setNames, deleteNameById, editById } = require('../Controller/index');
const router = express.Router();

router.route('/').get(getNames).post(setNames);
router.route('/:id').delete(deleteNameById);
router.route('/:id').put(editById)
module.exports = router