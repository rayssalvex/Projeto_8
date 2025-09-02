import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-custom p-3 text-center text-white text-sm">
      <p>&copy; {new Date().getFullYear()} Gerador de Currículo Inteligente. Desenvolvido por BotiCode.</p>
    </footer>
  );
};

export default Footer;