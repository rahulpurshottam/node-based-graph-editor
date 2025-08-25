export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

 
 const getNodeColor = (nodeType) => {
  switch (nodeType) {
    case 'customInput':
      return 'bg-blue-100 border border-blue-300 text-blue-800 hover:bg-blue-200';
    case 'customOutput':
      return 'bg-orange-100 border border-orange-300 text-orange-800 hover:bg-orange-200';
    case 'llm':
      return 'bg-purple-100 border border-purple-300 text-purple-800 hover:bg-purple-200';
    case 'text':
      return 'bg-green-100 border border-green-300 text-green-800 hover:bg-green-200';
    case 'delay':
    case 'logger':
      return 'bg-indigo-100 border border-indigo-300 text-indigo-800 hover:bg-indigo-200';
    default:
      return 'bg-gray-100 border border-gray-300 text-gray-800 hover:bg-gray-200';
  }
};

return (
  <div
    className={`draggable-node ${type} ${getNodeColor(type)} px-4 py-2 rounded-md cursor-grab shadow-sm transition-colors duration-200`}
    onDragStart={(event) => onDragStart(event, type)}
    onDragEnd={(event) => (event.target.style.cursor = 'grab')}
    draggable
  >
    <span className="text-sm font-medium">{label}</span>
  </div>
  );
};
