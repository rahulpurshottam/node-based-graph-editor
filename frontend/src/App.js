import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import Header from './header';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header/>
      <div className="flex flex-1 overflow-hidden">
        <PipelineToolbar />
        <div className="flex-1 flex flex-col">
          <PipelineUI />
         
        </div>
      </div>
    </div>
  );
}

export default App;
