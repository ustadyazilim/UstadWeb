import { exit } from 'node:process'
import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const prisma = new PrismaClient()

const prettyPrint = (object: any) => console.log(JSON.stringify(object, undefined, 2))

async function seed() {
  console.log('========= 🌱 No seed data needed =========')
}

seed()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    exit(1)
  })
