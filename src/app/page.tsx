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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-4 py-32">
        <div className="max-w-4xl w-full text-center space-y-8">
          <h1 className="text-6xl font-light tracking-tight bg-gradient-to-r from-blue-600 to-teal-500 text-transparent bg-clip-text">
            TailorTrip
          </h1>
          <h2 className="text-2xl font-light text-blue-900">
            Create Your Perfect Journey with AI
          </h2>
          <p className="mt-6 text-lg leading-8 text-blue-800/70 max-w-2xl mx-auto">
            Using AI technology to craft personalized travel plans tailored just for you. From destination selection to itinerary planning, we&apos;ve got everything covered.
          </p>
          <div className="mt-10">
            <button
              onClick={() => scrollToSection('planning')}
              className="px-8 py-4 text-lg font-light bg-gradient-to-r from-blue-600 to-teal-500 text-white hover:from-blue-700 hover:to-teal-600 transition-all duration-300 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Start Planning
            </button>
          </div>
        </div>

        <div className="mt-32 grid gap-16 md:grid-cols-3 max-w-6xl mx-auto px-4">
          <div className="space-y-4 text-center md:text-left hover:transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-light text-blue-900">AI-Powered Planning</h3>
            <p className="text-blue-800/70">
              Utilizing advanced AI technology to recommend the best itineraries based on your preferences.
            </p>
          </div>
          <div className="space-y-4 text-center md:text-left hover:transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-light text-blue-900">Flexible Customization</h3>
            <p className="text-blue-800/70">
              Create your unique journey based on your time, budget, and interests.
            </p>
          </div>
          <div className="space-y-4 text-center md:text-left hover:transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-light text-blue-900">Real-time Adjustments</h3>
            <p className="text-blue-800/70">
              Adapt your plans on the fly to accommodate any changes during your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Planning Section */}
      <section id="planning" className="min-h-screen py-32 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-light text-blue-900">Plan Your Trip</h2>
            <p className="text-xl text-blue-800/70">Choose your destination and travel dates</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Destination Selection Card */}
            <div className="bg-white p-8 space-y-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-light text-blue-900">Choose Destination</h3>
              <input
                type="text"
                placeholder="Search destinations..."
                className="w-full p-4 bg-blue-50 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl transition-all duration-300"
              />
              <div className="space-y-4">
                <h4 className="text-sm text-blue-400">Popular Destinations</h4>
                <div className="flex flex-wrap gap-2">
                  {['Tokyo', 'Seoul', 'Bangkok', 'Singapore', 'London', 'Paris'].map((city) => (
                    <button
                      key={city}
                      className="px-4 py-2 bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors duration-200 rounded-full"
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Date Selection Card */}
            <div className="bg-white p-8 space-y-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-light text-blue-900">Select Dates</h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm text-blue-400">Departure Date</label>
                  <input
                    type="date"
                    className="w-full p-4 bg-blue-50 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-blue-400">Return Date</label>
                  <input
                    type="date"
                    className="w-full p-4 bg-blue-50 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => scrollToSection('activities')}
              className="px-8 py-4 text-lg font-light bg-gradient-to-r from-blue-600 to-teal-500 text-white hover:from-blue-700 hover:to-teal-600 transition-all duration-300 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Next: Choose Activities
            </button>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="min-h-screen py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-light text-blue-900">Choose Your Activities</h2>
            <p className="text-xl text-blue-800/70">Select activities that interest you</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                className="p-8 bg-white text-left rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-light text-blue-900 group-hover:text-blue-600">{activity}</h3>
                <p className="mt-2 text-blue-800/70">Experience the best of {activity.toLowerCase()}</p>
              </button>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => scrollToSection('chat')}
              className="px-8 py-4 text-lg font-light bg-gradient-to-r from-blue-600 to-teal-500 text-white hover:from-blue-700 hover:to-teal-600 transition-all duration-300 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Next: Customize with AI
            </button>
          </div>
        </div>
      </section>

      {/* AI Chat Section */}
      <section id="chat" className="min-h-screen py-32 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-light text-blue-900">Customize Your Trip</h2>
            <p className="text-xl text-blue-800/70">Chat with our AI to personalize your journey</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg">
              <div className="h-[500px] p-8 space-y-4 overflow-y-auto">
                <div className="flex justify-start">
                  <div className="max-w-[80%] bg-blue-50 px-6 py-4 rounded-2xl">
                    <p className="text-blue-900">Hello! I&apos;m your AI travel assistant. How can I help customize your trip?</p>
                  </div>
                </div>
              </div>
              <div className="p-8 border-t border-blue-100">
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 p-4 bg-blue-50 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl transition-all duration-300"
                  />
                  <button
                    type="button"
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white hover:from-blue-700 hover:to-teal-600 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/plan"
              className="px-8 py-4 text-lg font-light bg-gradient-to-r from-blue-600 to-teal-500 text-white hover:from-blue-700 hover:to-teal-600 transition-all duration-300 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-block"
            >
              Generate Complete Itinerary
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
