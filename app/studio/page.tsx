import React from 'react';
import SongConfigForm from '../components/music/SongConfigForm';
import InstrumentPicker from '../components/music/InstrumentPicker';
import LyricsEditor from '../components/music/LyricsEditor';
import SectionArrangement from '../components/music/SectionArrangement';
import PlayerBar from '../components/music/PlayerBar';

export default function StudioPage() {
  return (
    <div className="studio-container">
      <h1>Music Studio</h1>
      <div className="studio-layout">
        <div className="left-panel">
          <SongConfigForm />
          <InstrumentPicker />
        </div>
        <div className="center-panel">
          <LyricsEditor />
          <SectionArrangement />
        </div>
      </div>
      <PlayerBar />
    </div>
  );
}
