const jwt = require('jsonwebtoken');

exports.generateToken = (data) => {
    return jwt.sign(data, global.SALT_KEY, {
        expiresIn: '1d'
    });
}

exports.authorize = function (req, res, next) {
    var token = req.headers.authorization

    if (!token) {
        res.status(401).json({
            message: 'Acesso restrito'
        });
    } else
        jwt.verify(token, global.SALT_KEY, function (error, decoded) {
            if (error) {
                res.status(401).json({
                    message: 'Token Inválido'
                });
            } else {
                next();
            }
        })
}