import { useState, useRef, useEffect } from 'react';
import BaseNode, { createNodeConfig } from './BaseNode';
import { Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);

  useEffect(() => {
    const varRegex = /\{\{([^}]+)\}\}/g;
    const matches = [...currText.matchAll(varRegex)];
    const foundVars = matches.map(match => match[1].trim());
    setVariables(foundVars);
  }, [currText]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const config = createNodeConfig({
    title: 'Text',
    handles: [
      {
        type: 'source',
        position: Position.Right,
        id: `${id}-output`
      },
      ...variables.map(varName => ({
        type: 'target',
        position: Position.Left,
        id: `${id}-${varName}`,
        style: { 
          top: `${(variables.indexOf(varName) + 1) * (100 / (variables.length + 1))}%`
        }
      }))
    ]
  });

  const content = (
    <div>
      <textarea
        ref={textareaRef}
        value={currText}
        onChange={handleTextChange}
        className="node-textarea"
      />
      {variables.length > 0 && (
        <div className="node-variables">
          Variables: {variables.join(', ')}
        </div>
      )}
    </div>
  );

  return <BaseNode id={id} {...config} content={content} />;
};
