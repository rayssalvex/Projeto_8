import React from 'react';
import { FaLinkedin } from 'react-icons/fa'; // Importa o ícone

interface Props {
  onClick: () => void; // A função que será chamada ao clicar
}

const LinkedInImportButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex flex-col items-center justify-center p-4 bg-gray-700 hover:bg-gray-600 rounded-lg text-white transition-colors duration-200 border border-gray-600"
    >
      <FaLinkedin size={28} className="mb-2" />
      <span className="font-semibold">Importar perfil do LinkedIn</span>
    </button>
  );
};

export default LinkedInImportButton;