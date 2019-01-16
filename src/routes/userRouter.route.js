'use strict';

const
    auth = require('../middlewares/authMiddleware'),
    controller = require('../controllers/userController');

module.exports = (app) => {
    app.route('/users')
        .get(controller.getUsers)
        .post(controller.create);

    app.route('/users/:id')
        .get(controller.findOneById)
        .put(controller.findOneAndUpdate)
        .delete(controller.delete);
}