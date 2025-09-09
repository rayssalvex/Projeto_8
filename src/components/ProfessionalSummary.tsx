import React from "react";

// --- Ícones como Componentes SVG ---
// Para evitar problemas de importação, os ícones foram definidos como componentes SVG aqui.

const SpinnerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.624l.259 1.035L18 22.75l.843-.843.259-1.035a3.375 3.375 0 00-2.456-2.456L15.75 18l-1.035.259a3.375 3.375 0 00-2.456 2.456l-.259 1.035.843.843L15 21.75l1.035-.259a3.375 3.375 0 002.456-2.456z"
    />
  </svg>
);

interface Props {
  summary: string;
  onSummaryChange: (newSummary: string) => void;
  onGenerateSummary: () => void;
  isLoading: boolean;
}

const ProfessionalSummary: React.FC<Props> = ({ summary, onSummaryChange, onGenerateSummary, isLoading }) => {
  return (
    <div className="mb-6 border border-gray-700 rounded-lg p-4">
      <h3 className="text-xl font-semibold text-white mb-4">Resumo Profissional</h3>

      <textarea
        value={summary}
        onChange={(e) => onSummaryChange(e.target.value)}
        placeholder="Fale um pouco sobre sua carreira, objetivos e as tecnologias que você domina..."
        className="w-full h-32 p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-primary focus:outline-none resize-none"
      />

      <div className="flex justify-end mt-1">
        <button
          onClick={onGenerateSummary}
          disabled={isLoading}
          className="flex items-center gap-2 px-3 py-1.5 bg-gradient-custom text-white font-semibold rounded-md hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <SpinnerIcon className="animate-spin w-5 h-5" />
              <span className="w-32">Gerando...</span>
            </>
          ) : (
            <span className="flex flex-row gap-1.5 px-1.5">
              <img
                className="invert mb-1"
                width="16"
                height="16"
                src="https://img.icons8.com/fluency-systems-regular/48/sparkling--v1.png"
                alt="sparkling--v1"
              />
              Melhorar com IA
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProfessionalSummary;
