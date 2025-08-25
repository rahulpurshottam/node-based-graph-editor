import { useState } from 'react';
import BaseNode, { createNodeConfig } from './BaseNode';
import { Position } from 'reactflow';

export const LoggerNode = ({ id, data }) => {
  const [logLevel, setLogLevel] = useState(data?.logLevel || 'info');
  const [logMessage, setLogMessage] = useState(data?.logMessage || 'Processing data...');

  const handleLogLevelChange = (e) => {
    setLogLevel(e.target.value);
  };

  const handleLogMessageChange = (e) => {
    setLogMessage(e.target.value);
  };

  const config = createNodeConfig({
    title: 'Logger',
    type: 'logger',
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
        Log Level:
        <select
          value={logLevel}
          onChange={handleLogLevelChange}
          className="node-select"
        >
          <option value="info">Info</option>
          <option value="warn">Warning</option>
          <option value="error">Error</option>
          <option value="debug">Debug</option>
        </select>
      </label>
      
      <label className="node-label">
        Message:
        <input
          type="text"
          value={logMessage}
          onChange={handleLogMessageChange}
          className="node-input"
        />
      </label>
    </div>
  );

  return <BaseNode id={id} {...config} content={content} />;
};