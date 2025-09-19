import React from 'react'

interface MusicTrack {
  id: string
  title: string
  artist: string
  cover: string
  duration: string
  genre: string
}

// Sample data for demonstration
const sampleTracks: MusicTrack[] = [
  {
    id: '1',
    title: 'Electric Dreams',
    artist: 'AI Artist',
    cover: '/covers/placeholder-1.jpg',
    duration: '3:24',
    genre: 'Electronic'
  },
  {
    id: '2',
    title: 'Jazz Fusion Nights',
    artist: 'AI Composer',
    cover: '/covers/placeholder-2.jpg',
    duration: '4:12',
    genre: 'Jazz'
  },
  {
    id: '3',
    title: 'Ambient Waves',
    artist: 'AI Creator',
    cover: '/covers/placeholder-3.jpg',
    duration: '5:08',
    genre: 'Ambient'
  },
  {
    id: '4',
    title: 'Rock Revolution',
    artist: 'AI Band',
    cover: '/covers/placeholder-4.jpg',
    duration: '3:45',
    genre: 'Rock'
  }
]

export const DiscoverGrid: React.FC = () => {
  return (
    <div className="grid-discover">
      {sampleTracks.map((track) => (
        <div key={track.id} className="music-card group">
          <div className="aspect-square bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mb-3 flex items-center justify-center text-4xl font-bold">
            {track.title.charAt(0)}
          </div>
          <h3 className="font-semibold text-lg mb-1 group-hover:text-blue-400 transition-colors">
            {track.title}
          </h3>
          <p className="text-gray-400 text-sm mb-2">{track.artist}</p>
          <div className="flex justify-between items-center text-xs text-gray-500">
            <span>{track.genre}</span>
            <span>{track.duration}</span>
          </div>
        </div>
      ))}
    </div>
  )
}