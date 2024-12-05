import { User } from './user.interface'

export interface JobSeeker {
  id?: string
  user: User
  resumeURL?: string | null
  phoneNumber?: string | null
}
