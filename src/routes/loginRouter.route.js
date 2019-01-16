'use strict';

const 
    controller = require('../controllers/authController');

module.exports = (app) => {
    app.route('/login')
        .post(controller.authenticate)
}