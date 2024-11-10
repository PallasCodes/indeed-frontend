import { User } from './User.interface'

export interface JobSeeker {
  id?: string
  user: User
  resumeURL?: string | null
  phoneNumber?: string | null
}
