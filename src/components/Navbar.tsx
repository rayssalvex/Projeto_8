import React from 'react';
import { FaDownload } from 'react-icons/fa';

const Navbar: React.FC = () => {
  
  const handleDownload = () => {
    window.print();
  };

  return (
    <nav className="bg-gradient-custom p-4 shadow-lg flex justify-between items-center">
      <div className="w-24"></div>

      <h1 className="text-2xl font-bold text-white text-center">
        Gerador de Currículo Inteligente
      </h1>
      
      <div className="w-24 flex justify-end">
        <button
          onClick={handleDownload}
         className="flex items-center gap-2 bg-sky-700 hover:opacity-90 text-white font-semibold py-2 px-4 rounded-lg transition-opacity duration-200"
        >
          <FaDownload />
          <span>Baixar</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;1