import React from 'react';
import { ResumeData, Education } from '../types';

interface Props {
  education: Education[];
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
}

const EducationForm: React.FC<Props> = ({ education, setResumeData }) => {
  const handleAdd = () => {
    const newEdu: Education = { id: crypto.randomUUID(), course: '', institution: '', period: '' };
    setResumeData(prev => ({ ...prev, education: [...prev.education, newEdu] }));
  };

  const handleRemove = (id: string) => {
    setResumeData(prev => ({ ...prev, education: prev.education.filter(edu => edu.id !== id) }));
  };

  const handleChange = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setResumeData(prev => ({
      ...prev,
      education: prev.education.map(edu => edu.id === id ? { ...edu, [name]: value } : edu)
    }));
  };

  const inputClasses = "bg-gray-800 border border-gray-600 rounded-md p-2 w-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary";
  const buttonClasses = "bg-gradient-custom text-white font-bold py-2 px-4 rounded-md hover:opacity-90 transition-opacity duration-200 whitespace-nowrap";

  return (
    <div className="p-4 border border-gray-700 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-white">Educação</h2>
        <button type="button" onClick={handleAdd} className={buttonClasses}>Adicionar</button>
      </div>
      <div className="space-y-4">
        {education.map(edu => (
          <div key={edu.id} className="p-3 border border-gray-600 rounded-md relative">
            <button type="button" onClick={() => handleRemove(edu.id)} className="absolute top-2 right-3 text-red-500 hover:text-red-400 font-bold">⨉</button>
            <input name="course" value={edu.course} onChange={(e) => handleChange(edu.id, e)} placeholder="Curso" className={`${inputClasses} mt-6`} />
            <input name="institution" value={edu.institution} onChange={(e) => handleChange(edu.id, e)} placeholder="Instituição" className={`${inputClasses} mt-4`} />
            <input name="period" value={edu.period} onChange={(e) => handleChange(edu.id, e)} placeholder="Período" className={`${inputClasses} mt-4`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationForm;