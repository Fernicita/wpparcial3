const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersHistory');

router.get('/',controller.list );
router.get('/:fibValue', controller.index)
router.post('/', controller.create);
router.put('/:fibValue', controller.replace);
router.patch('/:fibValue', controller.update);
router.delete('/:fibValue', controller.destroy);

module.exports = router;
