const yup = require('yup');
const loginSchema = yup.object().shape({
    email: yup.string().email().required().max(80),
    password: yup.string().required(),
});

const registSchema = yup.object().shape({
    email: yup.string().email().required().max(80),
    password: yup.string().required(),
    name: yup.string().required(),
});

module.exports = {
    loginSchema,
    registSchema,
};
