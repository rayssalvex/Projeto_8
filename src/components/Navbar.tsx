import React from 'react';
import { FaDownload } from 'react-icons/fa';

// Define o tipo das props que o componente Navbar vai receber
interface NavbarProps {
  onBack: () => void;
}

// Desestrutura a propriedade 'onBack' que é passada para o componente
const Navbar: React.FC<NavbarProps> = ({ onBack }) => {
  const handleDownload = () => {
    window.print();
  };

  return (
    <nav className="bg-gradient-custom p-4 shadow-lg flex justify-between items-center">
      <div className="w-24">
        {/*Adicionado o 'onBack' button */}
        <button
          onClick={onBack}
          className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition-colors duration-200 text-white"
        >
          Voltar
        </button>
      </div>

      <h1 className="text-2xl font-bold text-white text-center">
        Gerador de Currículo Inteligente
      </h1>
      
      <div className="w-24 flex justify-end">
        <button
          onClick={handleDownload}
          className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 transition-colors duration-200 text-white flex items-center gap-2">
          <FaDownload />
          <span>Baixar</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;