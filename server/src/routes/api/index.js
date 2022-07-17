const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const deviceRoutes = require('./device-routes.js');

router.use('/users', userRoutes);
router.use('/device', deviceRoutes);

module.exports = router;