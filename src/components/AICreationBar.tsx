import React from 'react'

export const AICreationBar: React.FC = () => {
  return (
    <div className="bg-slate-800 rounded-lg p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">Create with AI</h2>
      <div className="space-y-4">
        <textarea
          className="w-full bg-slate-700 text-white placeholder-gray-400 rounded-lg p-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
          placeholder="Describe the music you want to create... (e.g., 'upbeat electronic dance track with synthesizers')"
        />
        <div className="flex gap-3">
          <button className="ai-button">
            Generate Music
          </button>
          <button className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            Add Lyrics
          </button>
          <button className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            Style Settings
          </button>
        </div>
      </div>
    </div>
  )
}