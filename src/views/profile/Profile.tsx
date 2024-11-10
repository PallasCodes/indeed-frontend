import { useEffect, useState } from 'react'
import { apiRequest } from '../../api/apiRequest'
import { UserRoles } from '../../types/userRoles.enum'
import JobSeeker from './JobSeeker'
import { JobSeeker as JobSeekerProfile } from '../../types/jobSeeker.interface'

export default function Profile() {
  const [profile, setProfile] = useState<JobSeekerProfile>()

  useEffect(() => {
    const getProfileData = async () => {
      const { data, message, error } = await apiRequest(
        'GET',
        '/profiles/my-profile',
      )

      if (error) message?.display()

      console.log(data.profile)

      setProfile(data.profile)
    }

    getProfileData()
  }, [])

  return (
    <div className="max-w-[520px] mx-auto py-6">
      {profile?.user.role === UserRoles.JOB_SEEKER && (
        <JobSeeker profile={profile as JobSeekerProfile} />
      )}
    </div>
  )
}
