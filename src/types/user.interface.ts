import { UserRoles } from './userRoles.enum'

export interface User {
  id?: string
  name?: string
  lastName?: string
  email: string
  location?: string
  role: UserRoles
}
