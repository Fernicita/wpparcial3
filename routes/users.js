const express = require('express');
const router = express.Router();
const controller = require('../controllers/users');
const checkPermissions = require('../auth');

router.get('/', checkPermissions(['productOwner'],['scrumMaster'],['developer']),controller.list );
router.get('/:id', checkPermissions(['productOwner'],['scrumMaster'],['developer']), controller.index)
router.post('/',  checkPermissions(['developer']),controller.create);
router.put('/:id', checkPermissions(['scrumMaster'],['developer']), controller.replace);
router.patch('/:id', checkPermissions(['scrumMaster'],['developer']), controller.update);
router.delete('/:id', checkPermissions(['productOwner'],['scrumMaster']), controller.destroy);

module.exports = router;
