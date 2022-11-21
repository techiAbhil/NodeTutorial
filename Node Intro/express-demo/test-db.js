const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    // select all
    // const allUsers = await prisma.users.findMany();
    // console.log(allUsers);\
    await prisma.users.create({
        data: {
            email: 'abhilash@virat.com',
            name: 'abhialsh virat',
            user_id: '1010101',
            password: 'ABH@virat.com',
        },
    });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
