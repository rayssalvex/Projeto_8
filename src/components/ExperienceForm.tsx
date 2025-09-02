import React from 'react';
import { ResumeData, Experience } from '../types';

interface Props {
  experiences: Experience[];
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
}

const ExperienceForm: React.FC<Props> = ({ experiences, setResumeData }) => {
  const handleAdd = () => {
    const newExp: Experience = {
      id: crypto.randomUUID(),
      company: '',
      role: '',
      startDate: '', 
      endDate: '', 
      description: '',
      current: false,
    };
    setResumeData(prev => ({ ...prev, experiences: [...prev.experiences, newExp] }));
  };

  const handleRemove = (id: string) => {
    setResumeData(prev => ({ ...prev, experiences: prev.experiences.filter(exp => exp.id !== id) }));
  };

  const handleChange = (id: string, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    // NOVO: Verifica o tipo do input e obtém o valor correto (checked ou value)
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
  
    setResumeData(prev => ({
      ...prev,
      experiences: prev.experiences.map(exp => {
        if (exp.id === id) {
          const updatedExp = { ...exp, [name]: newValue };
  
          // Lógica para limpar endDate quando 'current' é marcado
          if (name === 'current' && newValue === true) {
            updatedExp.endDate = '';
          }
          return updatedExp;
        }
        return exp;
      }),
    }));
  };

  const inputClasses = "bg-gray-800 border border-gray-600 rounded-md p-2 w-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary";
  const buttonClasses = "bg-gradient-custom text-white font-bold py-2 px-4 rounded-md hover:opacity-70 transition-opacity duration-200 whitespace-nowrap";

  return (
    <div className="p-4 border border-gray-700 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-white">Experiências</h2>
        <button type="button" onClick={handleAdd} className={buttonClasses}>Adicionar</button>
      </div>
      <div className="space-y-4">
        {experiences.map((exp) => (
          <div key={exp.id} className="p-3 border border-gray-600 rounded-md relative">
            <button type="button" onClick={() => handleRemove(exp.id)} className="absolute top-2 right-3 text-red-500 hover:text-red-400 font-bold">⨉</button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="role" value={exp.role} onChange={(e) => handleChange(exp.id, e)} placeholder="Cargo" className={`${inputClasses} mt-6`} />
              <input name="company" value={exp.company} onChange={(e) => handleChange(exp.id, e)} placeholder="Empresa" className={`${inputClasses} mt-6`} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <input 
                type="date" 
                name="startDate" 
                value={exp.startDate} 
                onChange={(e) => handleChange(exp.id, e)} 
                className={inputClasses} 
              />
              <input
                type="date"
                name="endDate"
                value={exp.endDate}
                onChange={(e) => handleChange(exp.id, e)}
                disabled={exp.current}
                className={`${inputClasses} ${exp.current ? 'bg-gray-700 cursor-not-allowed' : ''}`}
              />
            </div>
            
            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                name="current"
                checked={exp.current}
                onChange={(e) => handleChange(exp.id, e)}
                className="form-checkbox h-4 w-4 text-primary bg-gray-700 border-gray-600 rounded"
              />
              <span className="ml-2 text-gray-400">Emprego Atual</span>
            </div>

            <textarea name="description" value={exp.description} onChange={(e) => handleChange(exp.id, e)} placeholder="Descrição das atividades" className={`${inputClasses} mt-4 h-20`}></textarea>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceForm;