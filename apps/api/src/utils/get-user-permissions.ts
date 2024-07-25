import { defineAbilityFor, type Role, UserSchema } from '@saas/auth'

export function getUserPermissions(userId: string, role: Role) {
  const authUser = UserSchema.parse({
    id: userId,
    role,
  })

  const ability = defineAbilityFor(authUser)

  return ability
}
