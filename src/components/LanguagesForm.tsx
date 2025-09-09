import React, { useState } from 'react';
import { ResumeData, Language } from '../types';

interface Props {
  languages: Language[];
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
}

const LanguagesForm: React.FC<Props> = ({ languages, setResumeData }) => {
  const [newLanguage, setNewLanguage] = useState({ name: '', level: 'Básico' });

  const handleAdd = () => {
    if (newLanguage.name.trim() === '') return;
    const langToAdd: Language = { 
      id: crypto.randomUUID(),
      name: newLanguage.name,
      level: newLanguage.level
    };

    setResumeData(prev => ({
      ...prev,
      languages: [...prev.languages, langToAdd]
    }));
    setNewLanguage({ name: '', level: 'Básico' });
  };

  const handleRemove = (id: string) => {
    setResumeData(prev => ({ ...prev, languages: prev.languages.filter(lang => lang.id !== id) }));
  };

  const inputClasses = "bg-gray-800 border border-gray-600 rounded-md p-2 w-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary";
  const buttonClasses = "bg-gradient-custom text-white font-bold py-2 px-4 rounded-md hover:opacity-70 transition-opacity duration-200 whitespace-nowrap";

  return (
    <div className="p-4 border border-gray-700 rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-white">Idiomas</h2>
      <div className="flex gap-4 mb-4">
        {/* campo de texto para o idioma */}
        <input 
        value={newLanguage.name}
        onChange={(e) => setNewLanguage({ ...newLanguage, name: e.target.value })}
        placeholder='Ex: Inglês'
        className={inputClasses}
        />
        {/* Campo de seleção para o nível */}

        <select
          value={newLanguage.level} // Acessa a prioridade 'level' do objeto newLanguage
          onChange={(e) => setNewLanguage({ ...newLanguage, level: e.target.value })}
          className={inputClasses}
        >
          <option value="Básico">Básico</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
          <option value="Fluente">Fluente</option>
          <option value="Nativo">Nativo</option>
        </select>

        <button type="button" onClick={handleAdd} className={buttonClasses}>
          Adicionar
        </button>
      </div>
      <ul className="space-y-2">
        {languages.map(lang => (
          <li key={lang.id} className="flex justify-between items-center bg-gray-800 p-2 rounded">
            <span>{lang.name} - {lang.level}</span>
            <button type="button" onClick={() => handleRemove(lang.id)} className="text-red-500 hover:text-red-400 font-bold"
              title='Remover'>⨉</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguagesForm;