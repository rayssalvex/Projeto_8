import React from "react";
import capaImage from "../image/capa2.png";

const FeatureIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#2f81f7"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

interface HomePageProps {
  onStart: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onStart }) => {
  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <h1 className="logo">Gerador de Currículo Inteligente</h1>
        <nav className="main-nav">
          <a href="#features">Funcionalidades</a>
          <a
            href="https://github.com/rayssalvex/Projeto_8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Código Fonte
          </a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h2 className="hero-title">
              Construa um currículo impactante em minutos.
            </h2>
            <p className="hero-subtitle">
              Transforme suas informações profissionais em um currículo elegante
              e moderno, pronto para conquistar sua próxima oportunidade.
            </p>
            <button className="cta-button" onClick={onStart}>
              Começar a Criar →
            </button>
          </div>
          <div className="hero-image-placeholder">
            <img
              src={capaImage}
              alt="Visualização de um currículo moderno"
              className="h-full object-cover"
            />
          </div>
        </section>

        <section id="features" className="features">
          <h3 className="section-title">
            Tudo que você precisa em um só lugar
          </h3>
          <div className="features-grid">
            <div className="feature-card">
              <FeatureIcon />
              <h4>Formulário Guiado</h4>
              <p>
                Preencha seções de dados pessoais, experiência, educação e mais,
                de forma simples e intuitiva.
              </p>
            </div>
            <div className="feature-card">
              <FeatureIcon />
              <h4>Importação do LinkedIn</h4>
              <p>
                Economize tempo importando seus dados diretamente do seu perfil
                profissional do LinkedIn.
              </p>
            </div>
            <div className="feature-card">
              <FeatureIcon />
              <h4>Preview em Tempo Real</h4>
              <p>
                Visualize as alterações no seu currículo instantaneamente
                enquanto você preenche as informações.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="homepage-footer">
        <p>
          &copy; {new Date().getFullYear()} Gerador de Currículo Inteligente.
          Desenvolvido por BotiCode.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;