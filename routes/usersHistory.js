const express = require('express');
const router = express.Router();
const controller = require('../controllers/usersHistory');


const checkPermissions = require('../auth');


router.get('/', checkPermissions(['developer', 'scrumMaster', 'productOwner']),controller.list );
router.get('/:fibValue', checkPermissions(['developer']), controller.index)
router.post('/', checkPermissions(['scrumMaster', 'developer', 'productOwner']) ,controller.create);    
router.put('/:fibValue', checkPermissions(['scrumMaster','developer']), controller.replace);
router.patch('/:fibValue', checkPermissions(['scrumMaster','developer']), controller.update);
router.delete('/:fibValue', checkPermissions(['productOwner','scrumMaster', 'developer']), controller.destroy);

module.exports = router;
