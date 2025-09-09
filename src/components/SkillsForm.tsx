import React, { useState } from 'react';
import { ResumeData, Skill } from '../types';

interface Props {
  skills: Skill[];
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
}

const SkillsForm: React.FC<Props> = ({ skills, setResumeData }) => {
  const [newSkill, setNewSkill] = useState({ name: '', level: 'Básico' as Skill['level'] });

  const handleAdd = () => {
    if (newSkill.name.trim() === '') return;
    const skillToAdd: Skill = { ...newSkill, id: crypto.randomUUID() };
    setResumeData(prev => ({ ...prev, skills: [...prev.skills, skillToAdd] }));
    setNewSkill({ name: '', level: 'Básico' });
  };

  const handleRemove = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill.id !== id),
    }));
  };

  const inputClasses = "bg-gray-800 border border-gray-600 rounded-md p-2 w-full text-gray-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary";
  const buttonClasses = "bg-gradient-custom text-white font-bold py-2 px-4 rounded-md hover:opacity-70 transition-opacity duration-200 whitespace-nowrap";

  return (
    <div className="p-4 border border-gray-700 rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-white">Habilidades</h2>
      <div className="flex gap-4 mb-4">
        <input value={newSkill.name} onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })} placeholder="Nome da Habilidade" className={`${inputClasses} flex-grow`} />
        <select value={newSkill.level} onChange={(e) => setNewSkill({ ...newSkill, level: e.target.value as Skill['level'] })} className={inputClasses}>
          <option>Básico</option>
          <option>Intermediário</option>
          <option>Avançado</option>
        </select>
        <button type="button" onClick={handleAdd} className={buttonClasses}>Adicionar</button>
      </div>
      <ul className="space-y-2">
        {skills.map(skill => (
          <li key={skill.id} className="flex justify-between items-center bg-gray-800 p-2 rounded">
            <span>{skill.name} ({skill.level})</span>
            <button type="button" onClick={() => handleRemove(skill.id)} className="text-red-500 hover:text-red-400 font-bold"
              title='Remover'>⨉</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsForm;