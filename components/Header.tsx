
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white">
            N
          </div>
          <h1 className="text-xl font-bold tracking-tight text-white">
            Nexus <span className="text-indigo-400">Architect</span>
          </h1>
        </div>
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-slate-400">
          <a href="#" className="hover:text-white transition-colors">Documentation</a>
          <a href="#" className="hover:text-white transition-colors">Examples</a>
          <a href="#" className="hover:text-white transition-colors">Templates</a>
        </nav>
        <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
          Saved Prompts
        </button>
      </div>
    </header>
  );
};

export default Header;
