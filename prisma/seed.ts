import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
    const userLogin = "admin"
    const password = await bcrypt.hash("adminpassword", 10)
    
    await prisma.user.create({
        data:{
            userLogin,
            password
        }
    })

    await prisma.vehicle.createMany({
        data:[
            {
                name:"Uno",
                brand:"Fiat",
                model:"EVO WAY",
                price:35990,
                picture:"https://s3.ecompletocarros.dev/images/lojas/120/veiculos/42926/veiculoInfoVeiculoImagesMobile/vehicle_image_1604080532_83d55d036e0019cbdd0458fbe7927fc1.jpeg"
            },
            {
                name:"Cruze",
                brand:"Chevrolet",
                model:"LT 1.4",
                price:57890,
                picture:"https://motortudo.com/wp-content/uploads/2020/05/Ficha-T%C3%A9cnica-Chevrolet-Cruze-Hatch-LT-1.4-Turbo-2020.jpg"
            },
            {
                name:"Ranger",
                brand:"Ford",
                model:"XLS",
                price:132400,
                picture:"https://revistacarro.com.br/wp-content/uploads/2019/11/Ford-Ranger-XLS-2.jpg"
            },
            {
                name:"Nissan",
                brand:"March",
                model:"SV Start",
                price:42500,
                picture:"https://mkt.carrera.com.br/stock-images/43870-01-294061.jpg?withwebphttps://mkt.carrera.com.br/stock-images/48163-01-324720.jpg"
            }
        ]
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