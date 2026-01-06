
import React, { useState } from 'react';
import PromptArchitect from './components/PromptArchitect';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <PromptArchitect />
      </main>
      <Footer />
    </div>
  );
};

export default App;
