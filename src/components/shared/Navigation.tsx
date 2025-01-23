import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-light bg-gradient-to-r from-blue-600 to-teal-500 text-transparent bg-clip-text hover:from-blue-700 hover:to-teal-600 transition-all duration-300"
            >
              TailorTrip
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden sm:flex sm:space-x-8">
            <Link
              href="/dashboard"
              className="inline-flex items-center px-4 py-2 text-sm font-light text-blue-900 hover:bg-blue-50 rounded-full transition-all duration-300"
            >
              Plan Trip
            </Link>
            <Link
              href="/itineraries"
              className="inline-flex items-center px-4 py-2 text-sm font-light text-blue-900 hover:bg-blue-50 rounded-full transition-all duration-300"
            >
              Popular Trips
            </Link>
            <Link
              href="/chat"
              className="inline-flex items-center px-4 py-2 text-sm font-light text-blue-900 hover:bg-blue-50 rounded-full transition-all duration-300"
            >
              AI Assistant
            </Link>
          </div>

          {/* Right Section - Notifications & Profile */}
          <div className="flex items-center space-x-4">
            {/* Notification Button */}
            <button
              type="button"
              className="p-2 text-blue-900/70 hover:bg-blue-50 rounded-full transition-all duration-300"
            >
              <span className="sr-only">View notifications</span>
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </button>

            {/* Profile Button */}
            <div className="relative">
              <button
                type="button"
                className="flex items-center space-x-3 px-4 py-2 rounded-full hover:bg-blue-50 transition-all duration-300"
              >
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-teal-500"></div>
                <span className="text-sm font-light text-blue-900">Profile</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
