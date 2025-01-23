'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { DateRange, RangeKeyDict } from 'react-date-range'
import { format } from 'date-fns'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import {
  CalendarDaysIcon,
  MapPinIcon,
  PlusCircleIcon,
  XMarkIcon,
  ChevronRightIcon,
  PaperAirplaneIcon,
  BuildingOfficeIcon,
  CameraIcon,
  ShoppingBagIcon,
  GlobeAltIcon,
  MusicalNoteIcon,
  FilmIcon,
  HeartIcon,
  GlobeAsiaAustraliaIcon
} from '@heroicons/react/24/outline'

interface DateRangeSelection {
  startDate: Date
  endDate: Date
  key: string
}

interface TripStop {
  id: number
  destination: string
  dateRange: DateRangeSelection
}

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function Home() {
  const [tripStops, setTripStops] = useState<TripStop[]>([{
    id: 1,
    destination: '',
    dateRange: {
      startDate: new Date(new Date().setHours(0, 0, 0, 0)),
      endDate: new Date(new Date().setHours(0, 0, 0, 0)),
      key: 'selection'
    }
  }])

  const [openDatePicker, setOpenDatePicker] = useState<number | null>(null)

  // 添加 ref 用於檢測點擊外部
  const datePickerRef = useRef<HTMLDivElement>(null)

  // 處理點擊外部關閉
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
        setOpenDatePicker(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const addNewStop = () => {
    const lastStop = tripStops[tripStops.length - 1]

    // 檢查上一站是否已經選擇了結束日期
    if (lastStop.dateRange.startDate.getTime() === lastStop.dateRange.endDate.getTime()) {
      // 如果沒有選擇結束日期，不允許新增
      alert('請先為當前站點選擇結束日期')
      return
    }

    const newId = lastStop.id + 1
    setTripStops([...tripStops, {
      id: newId,
      destination: '',
      dateRange: {
        startDate: lastStop.dateRange.endDate, // 設置開始日期為上一站的結束日期
        endDate: lastStop.dateRange.endDate, // 初始時結束日期等於開始日期
        key: 'selection'
      }
    }])
  }

  const updateStop = (id: number, field: keyof TripStop, value: string | DateRangeSelection) => {
    setTripStops(tripStops.map(stop =>
      stop.id === id ? { ...stop, [field]: value } : stop
    ))
  }

  const handleDateRangeChange = (id: number, ranges: RangeKeyDict) => {
    const selection = ranges.selection
    if (!selection.startDate || !selection.endDate) return

    const stopIndex = tripStops.findIndex(stop => stop.id === id)

    // 第一站的處理邏輯
    if (stopIndex === 0) {
      // 如果選擇的開始日期早於今天，則不更新
      const today = new Date(new Date().setHours(0, 0, 0, 0))
      if (selection.startDate < today) return

      // 更新第一站日期
      const updatedStops = [...tripStops]
      updatedStops[0] = {
        ...updatedStops[0],
        dateRange: {
          startDate: selection.startDate,
          endDate: selection.endDate,
          key: 'selection'
        }
      }

      // 如果有下一站，同步更新下一站的開始日期
      if (stopIndex + 1 < updatedStops.length) {
        updatedStops[1] = {
          ...updatedStops[1],
          dateRange: {
            startDate: selection.endDate,
            endDate: selection.endDate, // 重置結束日期為開始日期
            key: 'selection'
          }
        }
      }

      setTripStops(updatedStops)
    } else {
      // 非第一站只能選擇結束日期
      const prevStopEndDate = tripStops[stopIndex - 1].dateRange.endDate

      const updatedStops = [...tripStops]
      updatedStops[stopIndex] = {
        ...updatedStops[stopIndex],
        dateRange: {
          startDate: prevStopEndDate,
          endDate: selection.endDate,
          key: 'selection'
        }
      }

      // 如果有下一站，同步更新下一站的開始日期
      if (stopIndex + 1 < updatedStops.length) {
        updatedStops[stopIndex + 1] = {
          ...updatedStops[stopIndex + 1],
          dateRange: {
            startDate: selection.endDate,
            endDate: selection.endDate, // 重置結束日期為開始日期
            key: 'selection'
          }
        }
      }

      setTripStops(updatedStops)
    }
  }

  const removeStop = (id: number) => {
    if (tripStops.length > 1) {
      setTripStops(tripStops.filter(stop => stop.id !== id))
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white relative">
      {/* Global Background Pattern */}
      <div
        className="fixed inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%232563eb' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}
      />

      {/* Hero Section with its own pattern */}
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-4 py-32 relative">
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563eb' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}
        />
        <div className="max-w-4xl w-full text-center space-y-8 relative">
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
              className="px-8 py-4 text-lg font-light bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 rounded-full shadow-sm hover:shadow-md"
            >
              Start Planning
            </button>
          </div>
        </div>

        <div className="mt-32 grid gap-16 md:grid-cols-3 max-w-6xl mx-auto px-4">
          <div className="space-y-4 text-center md:text-left hover:transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <GlobeAsiaAustraliaIcon className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-light text-blue-900">AI-Powered Planning</h3>
            </div>
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

      {/* Planning Section with different pattern */}
      <section id="planning" className="min-h-screen py-32 relative">
        <div className="absolute inset-0 bg-white"></div>
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232563eb' fill-opacity='0.8' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}
        />
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-light text-blue-900">Plan Your Trip</h2>
            <p className="text-xl text-blue-800/70">Choose your destinations and dates for each stop</p>
          </div>

          <div className="space-y-6">
            {tripStops.map((stop, index) => (
              <div
                key={stop.id}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center space-x-2">
                    <MapPinIcon className="w-6 h-6 text-blue-600" />
                    <h3 className="text-2xl font-light text-blue-900">Stop {index + 1}</h3>
                  </div>
                  {tripStops.length > 1 && (
                    <button
                      onClick={() => removeStop(stop.id)}
                      className="p-2 text-red-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-all duration-200"
                    >
                      <XMarkIcon className="w-5 h-5" />
                    </button>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Destination Selection */}
                  <div className="space-y-4">
                    <label className="flex items-center space-x-2 text-sm text-blue-400">
                      <BuildingOfficeIcon className="w-4 h-4" />
                      <span>Destination</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Search destinations..."
                      value={stop.destination}
                      onChange={(e) => updateStop(stop.id, 'destination', e.target.value)}
                      className="w-full p-4 bg-blue-50 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl transition-all duration-300"
                    />
                    <div className="flex flex-wrap gap-2 mt-2">
                      {['Tokyo', 'Seoul', 'Bangkok', 'Singapore', 'London', 'Paris'].map((city) => (
                        <button
                          key={city}
                          onClick={() => updateStop(stop.id, 'destination', city)}
                          className="px-4 py-2 bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors duration-200 rounded-full"
                        >
                          {city}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Date Selection */}
                  <div className="space-y-4 relative">
                    <label className="flex items-center space-x-2 text-sm text-blue-400">
                      <CalendarDaysIcon className="w-4 h-4" />
                      <span>Date Range</span>
                    </label>
                    <button
                      onClick={() => setOpenDatePicker(openDatePicker === stop.id ? null : stop.id)}
                      className="w-full p-4 bg-blue-50 text-blue-900 rounded-xl text-left focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    >
                      {format(stop.dateRange.startDate, 'MMM dd, yyyy')} - {format(stop.dateRange.endDate, 'MMM dd, yyyy')}
                    </button>

                    {openDatePicker === stop.id && (
                      <div className="absolute z-10 top-full left-0 mt-2" ref={datePickerRef}>
                        <div className="bg-white rounded-2xl shadow-xl p-4 relative overflow-hidden">
                          {/* Close Button */}
                          <button
                            onClick={() => setOpenDatePicker(null)}
                            className="absolute right-4 top-4 z-10 p-1 hover:bg-blue-50 rounded-full transition-colors duration-200"
                          >
                            <svg
                              className="w-5 h-5 text-blue-900/70"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                          </button>

                          {/* Background Pattern */}
                          <div
                            className="absolute inset-0 opacity-[0.03] pointer-events-none"
                            style={{
                              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230066FF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                              backgroundSize: '30px 30px'
                            }}
                          />
                          <div className="relative">
                            <DateRange
                              ranges={[stop.dateRange]}
                              onChange={(ranges) => handleDateRangeChange(stop.id, ranges)}
                              moveRangeOnFirstSelection={false}
                              months={1}
                              direction="horizontal"
                              className="border-0"
                              rangeColors={['#2563eb']}
                              color="#2563eb"
                              minDate={
                                tripStops.findIndex(s => s.id === stop.id) === 0
                                  ? new Date() // 第一站最早可選今天
                                  : tripStops[tripStops.findIndex(s => s.id === stop.id) - 1].dateRange.endDate // 其他站最早可選上一站的結束日期
                              }
                              disabledDay={(date) => {
                                const stopIndex = tripStops.findIndex(s => s.id === stop.id)
                                if (stopIndex === 0) {
                                  // 第一站不能選今天以前的日期
                                  const today = new Date(new Date().setHours(0, 0, 0, 0))
                                  return date < today
                                }
                                // 非第一站不能選上一站結束日期以前的日期
                                const prevStopEndDate = tripStops[stopIndex - 1].dateRange.endDate
                                return date < prevStopEndDate
                              }}
                              editableDateInputs={false} // 禁止直接輸入日期
                              showSelectionPreview={true}
                              showPreview={true}
                              preventSnapRefocus={true}
                              disabled={
                                tripStops.findIndex(s => s.id === stop.id) !== 0
                                  ? { startDate: true } // 非第一站禁用開始日期選擇
                                  : undefined
                              }
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Add New Stop Button */}
            <div className="text-center">
              <button
                onClick={addNewStop}
                className={`flex items-center justify-center space-x-2 px-6 py-3 mx-auto font-light transition-all duration-200 ${
                  tripStops[tripStops.length - 1].dateRange.startDate.getTime() ===
                  tripStops[tripStops.length - 1].dateRange.endDate.getTime()
                    ? 'text-blue-300 cursor-not-allowed'
                    : 'text-blue-600 hover:text-blue-700'
                }`}
                disabled={
                  tripStops[tripStops.length - 1].dateRange.startDate.getTime() ===
                  tripStops[tripStops.length - 1].dateRange.endDate.getTime()
                }
              >
                <PlusCircleIcon className="w-5 h-5" />
                <span>Add Another Stop</span>
              </button>
            </div>

            {/* Next Step Button */}
            <div className="mt-16 text-center">
              <button
                onClick={() => scrollToSection('activities')}
                className="flex items-center justify-center space-x-2 px-8 py-4 text-lg font-light bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 rounded-full shadow-sm hover:shadow-md mx-auto"
              >
                <span>Next: Choose Activities</span>
                <ChevronRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section with another pattern */}
      <section id="activities" className="min-h-screen py-32 bg-gradient-to-b from-blue-50 to-white relative">
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563eb' fill-opacity='1'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '52px 26px'
          }}
        />
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-light text-blue-900">Choose Your Activities</h2>
            <p className="text-xl text-blue-800/70">Select activities that interest you</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Sightseeing', icon: CameraIcon },
              { name: 'Food & Dining', icon: BuildingOfficeIcon },
              { name: 'Shopping', icon: ShoppingBagIcon },
              { name: 'Nature & Outdoors', icon: GlobeAltIcon },
              { name: 'Arts & Culture', icon: MusicalNoteIcon },
              { name: 'Entertainment', icon: FilmIcon },
              { name: 'Sports & Recreation', icon: HeartIcon },
              { name: 'Relaxation', icon: HeartIcon },
              { name: 'Adventure', icon: GlobeAsiaAustraliaIcon },
            ].map(({ name, icon: Icon }) => (
              <button
                key={name}
                className="p-8 bg-white text-left rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-1"
              >
                <div className="flex items-center space-x-3">
                  <Icon className="w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                  <h3 className="text-xl font-light text-blue-900 group-hover:text-blue-600">{name}</h3>
                </div>
                <p className="mt-2 text-blue-800/70">Experience the best of {name.toLowerCase()}</p>
              </button>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => scrollToSection('chat')}
              className="flex items-center justify-center space-x-2 px-8 py-4 text-lg font-light bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 rounded-full shadow-sm hover:shadow-md mx-auto"
            >
              <span>Next: Customize with AI</span>
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Chat Section with final pattern */}
      <section id="chat" className="min-h-screen py-32 bg-gradient-to-b from-white to-blue-50 relative">
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232563eb' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '20px 20px'
          }}
        />
        <div className="max-w-6xl mx-auto px-4 relative">
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
                    className="flex items-center justify-center space-x-2 px-8 py-4 bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 rounded-xl shadow-sm hover:shadow-md"
                  >
                    <span>Send</span>
                    <PaperAirplaneIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/plan"
              className="flex items-center justify-center space-x-2 px-8 py-4 text-lg font-light bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 rounded-full shadow-sm hover:shadow-md mx-auto inline-flex"
            >
              <span>Generate Complete Itinerary</span>
              <ChevronRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
