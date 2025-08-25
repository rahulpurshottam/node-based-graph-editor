import BaseNode, { createNodeConfig } from './BaseNode';
import { Position } from 'reactflow';

export const LLMNode = ({ id }) => {
  const config = createNodeConfig({
    title: 'LLM',
    type: 'llm',
    handles: [
      {
        type: 'target',
        position: Position.Left,
        id: `${id}-system`,
        style: { top: '33.33%' }
      },
      {
        type: 'target',
        position: Position.Left,
        id: `${id}-prompt`,
        style: { top: '66.66%' }
      },
      {
        type: 'source',
        position: Position.Right,
        id: `${id}-response`
      }
    ]
  });

  const content = <div>This is a LLM.</div>;

  return <BaseNode id={id} {...config} content={content} />;
};
