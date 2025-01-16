'use client'

import Link from 'next/link'

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <div className="flex items-center justify-center">
            <h1 className="text-4xl font-bold tracking-tight">TailorTrip</h1>
          </div>
        </div>

        <div className="relative flex place-items-center">
          <div className="max-w-2xl text-center">
            <h2 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Create Your Perfect Journey
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Using AI technology to craft personalized travel plans tailored just for you. From destination selection to itinerary planning, we&apos;ve got everything covered.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                onClick={() => scrollToSection('planning')}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Start Planning
              </button>
            </div>
          </div>
        </div>

        <div className="mt-32 grid text-center lg:max-w-5xl lg:w-full lg:grid-cols-3 lg:text-left">
          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
            <h2 className="mb-3 text-2xl font-semibold">AI-Powered Planning</h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Utilizing advanced AI technology to recommend the best itineraries based on your preferences.
            </p>
          </div>

          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
            <h2 className="mb-3 text-2xl font-semibold">Flexible Customization</h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Create your unique journey based on your time, budget, and interests.
            </p>
          </div>

          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
            <h2 className="mb-3 text-2xl font-semibold">Real-time Adjustments</h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Adapt your plans on the fly to accommodate any changes during your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Planning Section */}
      <section id="planning" className="min-h-screen bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Plan Your Trip</h2>
            <p className="mt-4 text-lg text-gray-600">Choose your destination and travel dates</p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Destination Selection Card */}
            <div className="rounded-lg bg-white shadow">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Choose Destination</h3>
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Search destinations..."
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-500">Popular Destinations</h4>
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
                <h3 className="text-xl font-semibold text-gray-900">Select Dates</h3>
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

          <div className="mt-12 flex justify-center">
            <button
              onClick={() => scrollToSection('activities')}
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Next: Choose Activities
            </button>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="min-h-screen py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Choose Your Activities</h2>
            <p className="mt-4 text-lg text-gray-600">Select activities that interest you</p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'Sightseeing',
              'Food & Dining',
              'Shopping',
              'Nature & Outdoors',
              'Arts & Culture',
              'Entertainment',
              'Sports & Recreation',
              'Relaxation',
              'Adventure',
            ].map((activity) => (
              <button
                key={activity}
                className="rounded-lg border-2 border-transparent bg-white p-6 text-left shadow-sm hover:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              >
                <h3 className="text-lg font-semibold text-gray-900">{activity}</h3>
                <p className="mt-2 text-sm text-gray-500">Experience the best of {activity.toLowerCase()}</p>
              </button>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <button
              onClick={() => scrollToSection('chat')}
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Next: Customize with AI
            </button>
          </div>
        </div>
      </section>

      {/* AI Chat Section */}
      <section id="chat" className="min-h-screen bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Customize Your Trip</h2>
            <p className="mt-4 text-lg text-gray-600">Chat with our AI to personalize your journey</p>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="rounded-lg bg-white shadow">
              <div className="h-[400px] overflow-y-auto p-6">
                {/* Chat messages will go here */}
                <div className="space-y-4">
                  <div className="flex justify-start">
                    <div className="rounded-lg bg-gray-100 px-4 py-2">
                      <p className="text-sm text-gray-900">Hello! I&apos;m your AI travel assistant. How can I help customize your trip?</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t p-4">
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <button
                    type="button"
                    className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/plan"
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Generate Complete Itinerary
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
