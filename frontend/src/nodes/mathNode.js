import { useState } from 'react';
import BaseNode, { createNodeConfig } from './BaseNode';
import { Position } from 'reactflow';

export const MathNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || 'add');
  const [operand1, setOperand1] = useState(data?.operand1 || 0);
  const [operand2, setOperand2] = useState(data?.operand2 || 0);

  const handleOperationChange = (e) => setOperation(e.target.value);
  const handleOperand1Change = (e) => setOperand1(Number(e.target.value));
  const handleOperand2Change = (e) => setOperand2(Number(e.target.value));

  const config = createNodeConfig({
    title: 'Math',
    type: 'math',
    handles: [
      {
        type: 'target',
        position: Position.Left,
        id: `${id}-operand1`,
        style: { top: '30%' }
      },
      {
        type: 'target',
        position: Position.Left,
        id: `${id}-operand2`,
        style: { top: '70%' }
      },
      {
        type: 'source',
        position: Position.Right,
        id: `${id}-result`
      }
    ]
  });

  const content = (
    <div>
      <label className="node-label">
        Operation:
        <select 
          value={operation} 
          onChange={handleOperationChange}
          className="node-select"
        >
          <option value="add">Add (+)</option>
          <option value="subtract">Subtract (-)</option>
          <option value="multiply">Multiply (*)</option>
          <option value="divide">Divide (/)</option>
        </select>
      </label>

      <label className="node-label">
        Operand 1:
        <input
          type="number"
          value={operand1}
          onChange={handleOperand1Change}
          className="node-input"
        />
      </label>

      <label className="node-label">
        Operand 2:
        <input
          type="number"
          value={operand2}
          onChange={handleOperand2Change}
          className="node-input"
        />
      </label>
    </div>
  );

  return <BaseNode id={id} {...config} content={content} />;
};
