import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
    const password = await bcrypt.hash("adminpassword", 10)
    await prisma.user.create({
        data:{
            userLogin:'admin',
            password
        }
    })
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    })