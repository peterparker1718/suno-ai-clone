import React from 'react'

export const UserProfile: React.FC = () => {
  return (
    <div className="flex items-center justify-between bg-slate-800 rounded-lg p-4">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-lg font-bold">
          U
        </div>
        <div>
          <h1 className="text-xl font-semibold">Welcome, Music Creator</h1>
          <p className="text-gray-400 text-sm">Ready to create amazing AI music?</p>
        </div>
      </div>
      <div className="flex space-x-3">
        <button className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg text-sm transition-colors">
          My Library
        </button>
        <button className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg text-sm transition-colors">
          Settings
        </button>
      </div>
    </div>
  )
}