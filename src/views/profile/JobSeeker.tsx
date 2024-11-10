import Envelope from '../../components/icons/Envelope'
import { JobSeeker as JobSeekerProfile } from '../../types/jobSeeker.interface'

export default function JobSeeker({ profile }: { profile: JobSeekerProfile }) {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-4xl">
          {profile.user.name} {profile.user.lastName}
        </h1>
        <div className="bg-[#424242] rounded-full w-20 h-20 flex items-center justify-center">
          <h2 className="font-bold text-5xl text-white bg-">
            {profile.user.name && profile.user.name[0]}
            {profile.user.lastName && profile.user.lastName[0]}
          </h2>
        </div>
      </div>

      <div className="py-4 text-sm mt-3">
        <div className="flex items-center">
          <Envelope className="w-6 h-6 text-[#767676] mr-3" />
          <span>{profile.user.email}</span>
        </div>
        <div className="flex items-center my-2">
          <Envelope className="w-6 h-6 text-[#767676] mr-3" />
          <span>{profile.phoneNumber}</span>
        </div>
        <div className="flex items-center">
          <Envelope className="w-6 h-6 text-[#767676] mr-3" />
          <span>{profile.user.location}</span>
        </div>
      </div>

      <div>
        <h3 className="font-bold text-xl mt-7">CV</h3>
      </div>
    </>
  )
}
