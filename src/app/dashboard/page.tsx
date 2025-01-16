import Link from 'next/link'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Start Your Journey</h1>
            <p className="mt-2 text-sm text-gray-600">Choose your destination and travel dates, and let us plan the perfect trip for you.</p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Destination Selection Card */}
            <div className="rounded-lg bg-white shadow">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900">Choose Destination</h2>
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Search destinations..."
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-500">Popular Destinations</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['Tokyo', 'Seoul', 'Bangkok', 'Singapore', 'London', 'Paris'].map((city) => (
                      <button
                        key={city}
                        className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600 hover:bg-indigo-100"
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Date Selection Card */}
            <div className="rounded-lg bg-white shadow">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900">Select Dates</h2>
                <div className="mt-4 grid gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Departure Date</label>
                    <input
                      type="date"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Return Date</label>
                    <input
                      type="date"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <Link
              href="/plan"
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Start Planning
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
