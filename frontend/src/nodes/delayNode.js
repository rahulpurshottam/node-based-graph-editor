import { useState } from 'react';
import BaseNode, { createNodeConfig } from './BaseNode';
import { Position } from 'reactflow';

export const DelayNode = ({ id, data }) => {
  const [delayMs, setDelayMs] = useState(data?.delayMs || 1000);

  const handleDelayChange = (e) => {
    setDelayMs(Number(e.target.value));
  };

  const config = createNodeConfig({
    title: 'Delay',
    type: 'delay',
    handles: [
      {
        type: 'target',
        position: Position.Left,
        id: `${id}-input`
      },
      {
        type: 'source',
        position: Position.Right,
        id: `${id}-output`
      }
    ]
  });

  const content = (
    <div>
      <label className="node-label">
        Delay (ms):
        <input
          type="number"
          value={delayMs}
          onChange={handleDelayChange}
          className="node-input"
          min="0"
        />
      </label>
    </div>
  );

  return <BaseNode id={id} {...config} content={content} />;
};