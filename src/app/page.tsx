import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <div className="flex items-center justify-center">
            <h1 className="text-4xl font-bold tracking-tight">TailorTrip</h1>
          </div>
        </div>
      </div>

      <div className="relative flex place-items-center">
        <div className="max-w-2xl text-center">
          <h2 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Create Your Perfect Journey
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Using AI technology to craft personalized travel plans tailored just for you. From destination selection to itinerary planning, we've got everything covered.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/dashboard"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Start Planning
            </Link>
            <Link href="/itineraries" className="text-sm font-semibold leading-6 text-gray-900">
              Browse Popular Trips <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">
            AI-Powered Planning
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Utilizing advanced AI technology to recommend the best itineraries based on your preferences.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">
            Flexible Customization
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Create your unique journey based on your time, budget, and interests.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">
            Real-time Adjustments
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Adapt your plans on the fly to accommodate any changes during your journey.
          </p>
        </div>
      </div>
    </main>
  )
}
