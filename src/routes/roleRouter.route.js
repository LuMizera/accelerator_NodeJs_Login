'use strict';

const
    permission = require('../middlewares/permissionMiddleware'),
    controller = require('../controllers/roleController');

module.exports = (app) => {
    app.route('/roles')
        .get(permission.permissionRoute, controller.getRoles)
        .post(controller.create)
}