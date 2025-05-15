
import React from 'react';

const ColorSelection = () => {
  const colors = [
    { id: 'blue', color: 'bg-blue-500' },
    { id: 'orange', color: 'bg-orange-500' },
    { id: 'green', color: 'bg-green-500' },
    { id: 'red', color: 'bg-red-500' },
    { id: 'cyan', color: 'bg-cyan-400' },
  ];

  return (
    <div className="glass-card p-6 mb-4">
      <h3 className="text-lg mb-4">Popular Colors</h3>
      <div className="flex justify-between">
        {colors.map(colorItem => (
          <div key={colorItem.id} className={`color-dot ${colorItem.color}`}></div>
        ))}
      </div>
    </div>
  );
};

export default ColorSelection;
