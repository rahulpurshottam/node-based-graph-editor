import { DraggableNode } from './draggableNode';
import { FolderInput, FolderOutput, Type, Brain, Timer, FileText } from 'lucide-react';

export const PipelineToolbar = () => {
  return (
    <div className="sidebar p-4 bg-white border-r border-gray-200 h-full">
      <div className="sidebar-header mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Node Palette</h2>
        <p className="text-xs text-gray-600 mt-1">
          Drag nodes onto the canvas to build your pipeline
        </p>
      </div>

      <div className="sidebar-nodes space-y-2">
        {/* Input */}
        <div className="node-box input-box p-2 rounded-md bg-blue-100 border border-blue-300 hover:bg-blue-200 transition-colors">
          <DraggableNode
            type="customInput"
            label={
              <span className="flex items-center gap-2 text-blue-800">
                <FolderInput size={16} /> Input
              </span>
            }
          />
        </div>

        {/* Text */}
        <div className="node-box text-box p-2 rounded-md bg-green-100 border border-green-300 hover:bg-green-200 transition-colors">
          <DraggableNode
            type="text"
            label={
              <span className="flex items-center gap-2 text-green-800">
                <Type size={16} /> Text
              </span>
            }
          />
        </div>

        {/* LLM */}
        <div className="node-box llm-box p-2 rounded-md bg-purple-100 border border-purple-300 hover:bg-purple-200 transition-colors">
          <DraggableNode
            type="llm"
            label={
              <span className="flex items-center gap-2 text-purple-800">
                <Brain size={16} /> LLM
              </span>
            }
          />
        </div>

        {/* Output */}
        <div className="node-box output-box p-2 rounded-md bg-orange-100 border border-orange-300 hover:bg-orange-200 transition-colors">
          <DraggableNode
            type="customOutput"
            label={
              <span className="flex items-center gap-2 text-orange-800">
                <FolderOutput size={16} /> Output
              </span>
            }
          />
        </div>

        {/* Utility Nodes */}
        <div className="mt-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Utility Nodes</h3>

          <div className="node-box delay-box p-2 rounded-md bg-indigo-100 border border-indigo-300 hover:bg-indigo-200 transition-colors mb-2">
            <DraggableNode
              type="delay"
              label={
                <span className="flex items-center gap-2 text-indigo-800">
                  <Timer size={16} /> Delay
                </span>
              }
            />
          </div>

          <div className="node-box logger-box p-2 rounded-md bg-indigo-100 border border-indigo-300 hover:bg-indigo-200 transition-colors">
            <DraggableNode
              type="logger"
              label={
                <span className="flex items-center gap-2 text-indigo-800">
                  <FileText size={16} /> Logger
                </span>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
