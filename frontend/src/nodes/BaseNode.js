import React from 'react';
import { Handle } from 'reactflow';

const BaseNode = ({
  id,
  title = 'Node',
  handles = [],
  content = null,
  styles = {},
  type = 'default'
}) => {
  
  const getBorderClass = (nodeType) => {
  switch (nodeType) {
    case 'customInput':
      return 'border-l-4 border-blue-600';
    case 'customOutput':
      return 'border-l-4 border-red-500';
    case 'llm':
      return 'border-l-4 border-purple-500';
    case 'text':
      return 'border-l-4 border-red-500';
    case 'delay':
    case 'logger':
      return 'border-l-4 border-indigo-500';
    default:
      return 'border-l-4 border-gray-500';
  }
};


  return (
    <div className={`node node-${type} bg-white rounded-lg shadow-md border border-gray-200 ${getBorderClass(type)} p-4 min-w-[200px]`}>
      <div className="node-title font-semibold text-gray-800 mb-2 pb-2 border-b border-gray-100">
        {title}
      </div>

      {content || (
        <div className="text-gray-500 text-sm">
          No content provided
        </div>
      )}

      {handles.map((handle) => (
        <Handle
          key={`${id}-${handle.id}`}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={{
            width: '12px',
            height: '12px',
            ...handle.style
          }}
          className={`node-handle ${handle.type === 'source' ? 'bg-blue-500' : 'bg-green-500'} border-2 border-white`}
        />
      ))}
    </div>
  );
};

export default BaseNode;

export const createNodeConfig = (config) => ({
  title: 'Custom Node',
  handles: [],
  styles: {},
  content: null,
  ...config
});
