'use strict';

module.exports = (app) => {
    require('./routes/users')(app)
    return app
}