import { z } from 'zod'

import { roleSchema } from '../roles'

export const UserSchema = z.object({
  role: roleSchema,
})

export type User = z.infer<typeof UserSchema>
