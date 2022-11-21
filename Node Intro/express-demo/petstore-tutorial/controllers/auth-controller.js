const { PrismaClient } = require('@prisma/client');
const { Guid } = require('guid-typescript');

const prisma = new PrismaClient();

const register = async (req, res) => {
    try {
        const { body } = req;
        const user = await prisma.users.create({
            data: {
                user_id: Guid.create().toString(),
                ...body,
            },
        });
        res.json(user);
    } catch (e) {
        console.log(e);
        res.status(500).json({ Error: 'Something went wrong!' });
    }
};

const login = async (req, res) => {
    try {
        const { body } = req;
        const user = await prisma.users.findFirst({
            where: {
                ...body,
            },
        });

        res.json(user ?? { response: 'user not found' });
    } catch (e) {
        res.status(500).json({ Error: 'Something went wrong!' });
    }
};

module.exports = {
    login,
    register,
};
