import React from "react";
import { ResumeData, Volunteering } from "../types";
import { improveText } from "./Gemini";

interface Props {
  volunteering: Volunteering[];
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
}

const VolunteeringForm: React.FC<Props> = ({ volunteering, setResumeData }) => {
  const handleAdd = () => {
    const newVol: Volunteering = { id: crypto.randomUUID(), organization: "", role: "", period: "", description: "" };
    setResumeData((prev) => ({ ...prev, volunteering: [...prev.volunteering, newVol] }));
  };

  const handleRemove = (id: string) => {
    setResumeData((prev) => ({ ...prev, volunteering: prev.volunteering.filter((vol) => vol.id !== id) }));
  };

  const handleChange = (id: string, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setResumeData((prev) => ({
      ...prev,
      volunteering: prev.volunteering.map((vol) => (vol.id === id ? { ...vol, [name]: value } : vol)),
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
        <h2 className="text-xl font-semibold text-white">Voluntariado</h2>
        <button type="button" onClick={handleAdd} className={buttonClasses}>
          Adicionar
        </button>
      </div>
      <div className="space-y-4">
        {volunteering.map((vol) => (
          <div key={vol.id} className="p-3 border border-gray-600 rounded-md relative">
            <button
              type="button"
              onClick={() => handleRemove(vol.id)}
              className="absolute top-2 right-3 text-red-500 hover:text-red-400 font-bold"
            >
              ⨉
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="role"
                value={vol.role}
                onChange={(e) => handleChange(vol.id, e)}
                placeholder="Cargo"
                className={`${inputClasses} mt-6`}
              />
              <input
                name="organization"
                value={vol.organization}
                onChange={(e) => handleChange(vol.id, e)}
                placeholder="Organização"
                className={`${inputClasses} mt-6`}
              />
            </div>
            <input
              name="period"
              value={vol.period}
              onChange={(e) => handleChange(vol.id, e)}
              placeholder="Período"
              className={`${inputClasses} mt-4`}
            />
            <div className="flex items-start gap-3 mt-4">
              <textarea
                name="description"
                value={vol.description}
                onChange={(e) => handleChange(vol.id, e)}
                placeholder="Descrição"
                className={`${inputClasses} h-20`}
              ></textarea>

              <button
                type="button"
                onClick={() => handleImprove(vol.id, vol.description)}
                className="h-20 w-20 bg-gradient-custom text-white text-sm font-bold p-2 rounded-md hover:opacity-70 transition-opacity duration-200"
              >
                Revisar texto
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolunteeringForm;
