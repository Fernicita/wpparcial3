const express = require('express');
const router = express.Router();
const controller = require('../controllers/login');

router.get('/',controller.list );
router.get('/:token', controller.index)
router.post('/', controller.create);
router.put('/:token', controller.replace);
router.patch('/:token', controller.update);
router.delete('/:token', controller.destroy);

module.exports = router;
