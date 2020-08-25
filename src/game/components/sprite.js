import React from 'react';

export default function Sprite({
  image,
  data,
  position = { x: 0, y: 0 },
  step = 0,
  dir = 0,
  style,
}) {
  const { h, w } = data;
  const bac_x = step * w;
  const bac_y = dir * h;

  // console.log('Sprite:', step, dir, bac_x, bac_y);

  return (
    <div
      style={{
        ...style,
        position: 'absolute',
        top: position.y,
        left: position.x,
        height: `${h}px`,
        width: `${w}px`,
        // backgroundImage: `url(/sprite/m1.png)`,
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: `-${bac_x}px -${bac_y}px`,
      }}
    />
  );
}
