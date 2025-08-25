import { useState } from 'react';
import BaseNode, { createNodeConfig } from './BaseNode';
import { Position } from 'reactflow';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data?.inputType || 'Text');

  const handleNameChange = (e) => setCurrName(e.target.value);
  const handleTypeChange = (e) => setInputType(e.target.value);

  const config = createNodeConfig({
    title: 'Input',
    type: 'customInput',
    handles: [
      {
        type: 'source',
        position: Position.Right,
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
        <select 
          value={inputType} 
          onChange={handleTypeChange}
          className="node-select"
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>
    </div>
  );

  return <BaseNode id={id} {...config} content={content} />;
};
