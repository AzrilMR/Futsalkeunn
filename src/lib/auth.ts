import { prisma } from './prisma'
import bcrypt from 'bcryptjs'

export async function verifyAdmin(username: string, password: string) {
    try {
        const admin = await prisma.admin.findUnique({ where: { username } })
        if (!admin) return { succes: false }
        const validPassword = await bcrypt.compare(password, admin.password)
        if (!validPassword) return { succes: false }

        return { succes: true, admin }
    } catch (error) {
        return { succes: false }
    }
}

export async function hashPassword(password: string) {
    return bcrypt.hash(password,12)
}