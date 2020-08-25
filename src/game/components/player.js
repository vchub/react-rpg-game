import React from 'react';
// import './sprite/styles.css'
import Sprite from './sprite';
import { useKeyPress, useWalk } from '../hooks';

export default function Player({ skin }) {
  const { dir, step, walk, position } = useWalk(3);
  const image = `/sprite/${skin}.png`;
  const data = { h: 32, w: 32 };

  useKeyPress(e => {
    walk(e.key.replace('Arrow', '').toLowerCase());
    e.preventDefault();
  });

  return (
    <div className="zone-container">
      <Sprite
        position={position}
        dir={dir}
        step={step}
        style={{ position: 'absolute' }}
        image={image}
        data={data}
      />
    </div>
  );
}
