import React from 'react';
// source:
// https://github.com/devmentorlive/dd13cd63/tree/movement
//
// import './sprite/styles.css'
import Player from './components/player';

export default function GameApp() {
  return (
    <div className="zone-container">
      <Player skin="m1" />
    </div>
  );
}
