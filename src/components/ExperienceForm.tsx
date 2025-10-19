import React from "react";
import { ResumeData, Experience } from "../types";
import { improveText } from "../Gemini";

interface Props {
  experiences: Experience[];
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
}

const ExperienceForm: React.FC<Props> = ({ experiences, setResumeData }) => {
  const handleAdd = () => {
    const newExp: Experience = { id: crypto.randomUUID(), company: "", role: "", startDate: "", endDate: "", description: "", current: false };
    setResumeData((prev) => ({ ...prev, experiences: [...prev.experiences, newExp] }));
  };

  const handleRemove = (id: string) => {
    setResumeData((prev) => ({ ...prev, experiences: prev.experiences.filter((exp) => exp.id !== id) }));
  };

  const handleChange = (id: string, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    // Verifica se o input é um checkbox para tratar o valor 'checked'
    const isCheckbox = type === 'checkbox';
    const inputValue = isCheckbox ? (e.target as HTMLInputElement).checked : value;

    setResumeData((prev) => ({
      ...prev,
      experiences: prev.experiences.map((exp) => {
        if (exp.id === id) {
          const updatedExp = { ...exp, [name]: inputValue };

          // Se o checkbox 'current' foi marcado, limpa a data final
          if (name === 'current' && inputValue === true) {
            updatedExp.endDate = '';
          }
          return updatedExp;
        }
        return exp;
      }),
    }));
  };

  const handleImprove = async (id: string, text: string) => {
  };

  const inputClasses = "bg-gray-800 border border-gray-600 rounded-md p-2 w-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50";
  const buttonClasses = "bg-gradient-custom text-white font-bold py-2 px-4 rounded-md hover:opacity-70 transition-opacity duration-200 whitespace-nowrap";

  return (
    <div className="p-4 border border-gray-700 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-white">Experiências</h2>
        <button type="button" onClick={handleAdd} className={buttonClasses}>
          Adicionar
        </button>
      </div>
      <div className="space-y-4">
        {experiences.map((exp) => (
          <div key={exp.id} className="p-3 border border-gray-600 rounded-md relative">
            <button
              type="button"
              onClick={() => handleRemove(exp.id)}
              className="absolute top-2 right-3 text-red-500 hover:text-red-400 font-bold"
              title="Remover"
            >
              ⨉
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="role" value={exp.role} onChange={(e) => handleChange(exp.id, e)} placeholder="Cargo" className={`${inputClasses} mt-6`} />
              <input name="company" value={exp.company} onChange={(e) => handleChange(exp.id, e)} placeholder="Empresa" className={`${inputClasses} mt-6`} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="text-xs text-gray-400">Data de Início</label>
                <input type="date" name="startDate" value={exp.startDate} onChange={(e) => handleChange(exp.id, e)} className={inputClasses} />
              </div>
              <div>
                <label className="text-xs text-gray-400">Data de Fim</label>
                <input
                  type="date"
                  name="endDate"
                  value={exp.endDate}
                  onChange={(e) => handleChange(exp.id, e)}
                  disabled={exp.current} //LÓGICA PARA DESABILITAR
                  className={inputClasses}
                />
              </div>
            </div>
            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                name="current"
                id={`current-${exp.id}`}
                checked={exp.current}
                onChange={(e) => handleChange(exp.id, e)}
                className="mr-2 h-4 w-4 rounded"
              />
              <label htmlFor={`current-${exp.id}`} className="text-gray-400">Trabalho atualmente aqui</label>
            </div>

            <div className="flex items-start gap-4 mt-4">
              <textarea name="description" value={exp.description} onChange={(e) => handleChange(exp.id, e)} placeholder="Descrição das atividades" className={`${inputClasses} h-20`} />
              <button
                type="button"
                onClick={async (e) => {
                  const btn = e.currentTarget;
                  btn.classList.add("loading");
                  await handleImprove(exp.id, exp.description);
                  btn.classList.remove("loading");
                }}
                className="improve-btn h-20 w-20 text-sm bg-gradient-custom text-white font-bold p-3 rounded-md hover:opacity-70 transition-opacity duration-200"
              >
                <span className="default flex flex-col items-center justify-center">
                  <img
                    className="invert mb-1"
                    width="16"
                    height="16"
                    src="https://img.icons8.com/fluency-systems-regular/48/sparkling--v1.png"
                    alt="sparkling--v1"
                  />
                  Melhorar com IA
                </span>
                <span className="loading hidden ">
                  <div className="animate-spin rounded-full h-5 w-5 border-4 border-white border-t-transparent mb-1 "></div>
                  Gerando...
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceForm;