import { useState } from 'react';
import BaseNode, { createNodeConfig } from './BaseNode';
import { Position } from 'reactflow';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  const config = createNodeConfig({
    title: 'Output',
    type: 'customOutput',
    handles: [
      {
        type: 'target',
        position: Position.Left,
        id: `${id}-value`
      }
    ]
  });

  const content = (
    <div>
      <label className="node-label">
        Name:
        <input
          type="text"
          value={currName}
          onChange={handleNameChange}
          className="node-input"
        />
      </label>
      <label className="node-label">
        Type:
        <select value={outputType} onChange={handleTypeChange} className="node-select">
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </label>
    </div>
  );

  return <BaseNode id={id} {...config} content={content} />;
};
