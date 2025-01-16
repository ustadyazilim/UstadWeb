import { YesilDefterUser } from '@prisma/client'

import prisma from '../../../../prisma/prisma'

export async function retrieveYesilDefterUserFromDatabaseByEmail(email: YesilDefterUser['email']) {
  return await prisma.yesilDefterUser.findUnique({ where: { email } })
}
