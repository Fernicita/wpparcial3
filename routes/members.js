const express = require('express');
const router = express.Router();
const controller = require('../controllers/members');
const checkPermissions = require('../auth');

router.get('/', checkPermissions(['developer', 'scrumMaster', 'productOwner']),controller.list );
router.get('/:id', checkPermissions(['developer']), controller.index)
router.post('/', controller.create);    
router.put('/:id', checkPermissions(['scrumMaster','developer']), controller.replace);
router.patch('/:id', checkPermissions(['scrumMaster','developer']), controller.update);
router.delete('/:id', checkPermissions(['productOwner','scrumMaster', 'developer']), controller.destroy);

module.exports = router;
