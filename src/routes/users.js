'use strict';

const
    controller = require('../controllers/test');

module.exports = (app) => {
    app.route('/v1/users')
        .get(controller.get)
}