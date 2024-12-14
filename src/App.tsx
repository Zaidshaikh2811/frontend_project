import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Container1 from './components/Container1';
import Container2 from './components/Container2';
import Container3 from './components/Container3';
import Container4 from './components/Container4';
import Container5 from './components/Container5';
import Container6 from './components/Container6';

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header onMenuClick={() => setSidebarOpen(!isSidebarOpen)} />

      {/* Layout */}
      <div className="flex flex-1">
        {/* Sidebar (visible on desktop) */}
        <Sidebar className="hidden lg:block" isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main Content */}
        <main className="flex-1 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
          <Container1 />
          <Container2 />
          <Container3 />
          <Container4 />
          <Container5 />
          <Container6 />
        </main>
      </div>
    </div>
  );
};

export default App;
