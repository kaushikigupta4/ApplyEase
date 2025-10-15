
import LatestJobCards from './LatestJobCards'
import { useSelector } from 'react-redux'

const LatestJobs = () => {
  const { allJobs } = useSelector((store) => store.job)

  return (
    <section className="max-w-7xl mx-auto my-20 px-6">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
        <span className="text-[hsl(var(--primary))]">Latest & Top </span>Job Openings
      </h2>

      {/* Job Cards Grid */}
      {allJobs.length <= 0 ? (
        <p className="text-center text-[hsl(var(--muted-foreground))] text-lg">No jobs available at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allJobs.slice(0, 6).map((job) => (
            <LatestJobCards key={job._id} job={job} />
          ))}
        </div>
      )}

      {/* Optional CTA Button */}
      {allJobs.length > 6 && (
        <div className="flex justify-center mt-10">
          <button
            className="px-6 py-3 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            View All Jobs
          </button>
        </div>
      )}
    </section>
  )
}

export default LatestJobs
