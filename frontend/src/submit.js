import React from 'react';
import { useStore } from './store';
import { Play } from 'lucide-react';

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    try {
      // Ensure nodes/edges are always arrays
      const payload = {
        nodes: nodes || [],
        edges: edges || [],
      };

      console.log("Submitting payload:", payload);

      const response = await fetch(
        'https://node-based-graph-editor-2.onrender.com/pipelines/parse',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error(`Backend error: ${response.status}`);
      }

      const result = await response.json();

      const dagStatus =
        result.num_nodes === 0 && result.num_edges === 0
          ? 'NA'
          : result.is_dag
          ? 'Yes'
          : 'No';

      alert(
        `Pipeline Analysis:\n\n` +
          `Nodes: ${result.num_nodes}\n` +
          `Edges: ${result.num_edges}\n` +
          `Is DAG: ${dagStatus}`
      );
    } catch (error) {
      alert('Error submitting pipeline: ' + error.message);
      console.error("Submit error:", error);
    }
  };

  return (
    <button
      onClick={handleSubmit}
      className="flex items-center gap-2 px-5 py-2.5
                 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700
                 text-white text-sm font-semibold tracking-wide rounded-lg
                 shadow-md hover:from-blue-600 hover:via-blue-700 hover:to-blue-800
                 active:scale-[0.98] transition-all duration-200"
    >
      <Play size={16} className="fill-white" />
      Run Pipeline
    </button>
  );
};
