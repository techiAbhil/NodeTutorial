const e = require('express');
const express = require('express');
const { login, register } = require('../controllers/auth-controller');
const {
    loginSchema,
    registSchema,
} = require('../validations/auth-validations');

const router = express.Router();

const schmaValidationHandler = (validationSchema) => async (req, res, next) => {
    try {
        await validationSchema.validate(req.body);
        next();
    } catch (e) {
        res.status(400).json(e);
    }
};

router.post('/register', schmaValidationHandler(registSchema), register);

router.post('/login', schmaValidationHandler(loginSchema), login);

module.exports = router;
