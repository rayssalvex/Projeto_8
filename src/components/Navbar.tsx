import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-custom p-4 shadow-lg flex justify-between items-center">
      <div className="w-24"></div>

      <h1 className="text-2xl font-bold text-white text-center">
        Gerador de Currículo Inteligente
      </h1>
      
      <div className="w-24 flex justify-end">
      </div>
    </nav>
  );
};

export default Navbar;1