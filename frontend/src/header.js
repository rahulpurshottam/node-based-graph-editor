import React from 'react';
import { SubmitButton } from './submit';
import { Workflow } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b bg-white shadow-sm">
      <h1 className="flex items-center gap-3 text-3xl libertinus-serif-bold font-semibold text-gray-800 tracking-wide">
        <Workflow size={32} className="text-gray-600" />
        VISUAL PIPELINE BUILDER
      </h1>
      <SubmitButton />
    </header>
  );
};

export default Header;
