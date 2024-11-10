export default function JobFullInfo({ job }: { job: any }) {
  return (
    <div className="w-full border border-grayIndeed p-4 rounded-lg pt-6">
      {job.title}
    </div>
  )
}
