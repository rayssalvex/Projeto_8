import React from "react";
import { ResumeData, Experience } from "../types";
import { improveText } from "./Gemini";

interface Props {
  experiences: Experience[];
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
}

const ExperienceForm: React.FC<Props> = ({ experiences, setResumeData }) => {
  const handleAdd = () => {
    const newExp: Experience = { id: crypto.randomUUID(), company: "", role: "", period: "", description: "" };
    setResumeData((prev) => ({ ...prev, experiences: [...prev.experiences, newExp] }));
  };

  const handleRemove = (id: string) => {
    setResumeData((prev) => ({ ...prev, experiences: prev.experiences.filter((exp) => exp.id !== id) }));
  };

  const handleChange = (id: string, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setResumeData((prev) => ({
      ...prev,
      experiences: prev.experiences.map((exp) => (exp.id === id ? { ...exp, [name]: value } : exp)),
    }));
  };

  const handleImprove = async (id: string, text: string) => {
    const improved = await improveText(text);
    setResumeData((prev) => ({
      ...prev,
      experiences: prev.experiences.map((e) => (e.id === id ? { ...e, description: improved } : e)),
    }));
  };

  const inputClasses =
    "bg-gray-800 border border-gray-600 rounded-md p-2 w-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary";
  const buttonClasses =
    "bg-gradient-custom text-white font-bold py-2 px-4 rounded-md hover:opacity-70 transition-opacity duration-200 whitespace-nowrap";

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
            >
              ⨉
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="role"
                value={exp.role}
                onChange={(e) => handleChange(exp.id, e)}
                placeholder="Cargo"
                className={`${inputClasses} mt-6`}
              />
              <input
                name="company"
                value={exp.company}
                onChange={(e) => handleChange(exp.id, e)}
                placeholder="Empresa"
                className={`${inputClasses} mt-6`}
              />
            </div>
            <input
              name="period"
              value={exp.period}
              onChange={(e) => handleChange(exp.id, e)}
              placeholder="Período (Ex: Jan 2020 - Dez 2022)"
              className={`${inputClasses} mt-4`}
            />

            <div className="flex items-start gap-3 mt-4">
              <textarea
                name="description"
                value={exp.description}
                onChange={(e) => handleChange(exp.id, e)}
                placeholder="Descrição das atividades"
                className={`${inputClasses} h-20`}
              />

              <button
                type="button"
                onClick={async () => {
                  const improved = await improveText(exp.description);
                  setResumeData((prev) => ({
                    ...prev,
                    experiences: prev.experiences.map((e) => (e.id === exp.id ? { ...e, description: improved } : e)),
                  }));
                }}
                className="h-20 w-20 text-sm bg-gradient-custom text-white text-sm font-bold p-2 rounded-md hover:opacity-70 transition-opacity duration-200"
              >
                {" "}
                Revisar texto
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceForm;
