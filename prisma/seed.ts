import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('Memulai seeding database')

  try {
    console.log('Membersihkan data admin lama')
    await prisma.admin.deleteMany()

    console.log('Membuat admin user')
    const hashedPassword = await bcrypt.hash('admin123', 12)
    
    await prisma.admin.create({
      data: {
        username: 'admin',
        password: hashedPassword,
      }
    })

    console.log('Selesai')

  } catch (error) {
    console.error('ERROR saat seeding:', error)
    throw error
  }
}

main()
  .catch((e) => {
    console.error('Seeding gagal:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })