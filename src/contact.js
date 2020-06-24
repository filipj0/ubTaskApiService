const express = require('express');

createRouter = () => {
    const router = express.Router();

    // create team
    router.post('/contact', (req, res, next) => {
        let email = req.body.EmailAddress;
        let message = req.body.Message;

        let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(email)) {
            res.status(500).json({errorCode: 'INVALID_EMAIL_ADDRESS'});
        }
        else if (message.length < 30) {
            res.status(500).json({errorCode: 'MESSAGE_TOO_SHORT'});
        }
        else {
            res.status(200).json({errorCode: ''});
        }
    });

    return router;
};

validateEmail = (email) => {
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

module.exports = createRouter;