'use strict';

const
    controller = require('../controllers/userPermissionController');

module.exports = (app) => {
    app.route('/userPermissions')
        .get(controller.getPermissions)
        .post(controller.create)
}