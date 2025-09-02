// src/components/CertificationsForm.tsx

import React, { useState } from 'react';
import { ResumeData, Certification } from '../types';

interface Props {
  certifications: Certification[];
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
}

const CertificationsForm: React.FC<Props> = ({ certifications, setResumeData }) => {
  const [newCertification, setNewCertification] = useState({ name: '', organization: '', date: '' });

  const handleAdd = () => {
    if (newCertification.name.trim() === '' || newCertification.organization.trim() === '') return;
    const certToAdd: Certification = { ...newCertification, id: crypto.randomUUID() };
    setResumeData(prev => ({ ...prev, certifications: [...prev.certifications, certToAdd] }));
    setNewCertification({ name: '', organization: '', date: '' });
  };

  const handleRemove = (id: string) => {
    setResumeData(prev => ({ ...prev, certifications: prev.certifications.filter(cert => cert.id !== id) }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCertification(prev => ({ ...prev, [name]: value }));
  };

  const inputClasses = "bg-gray-800 border border-gray-600 rounded-md p-2 w-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary";
  const buttonClasses = "bg-gradient-custom text-white font-bold py-2 px-4 rounded-md hover:opacity-70 transition-opacity duration-200 whitespace-nowrap";

  return (
    <div className="p-4 border border-gray-700 rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-white">Certificações</h2>
      <div className="flex gap-4 mb-4">
        <input name="name" value={newCertification.name} onChange={handleChange} placeholder="Nome da Certificação" className={`${inputClasses} flex-grow`} />
        <input name="organization" value={newCertification.organization} onChange={handleChange} placeholder="Organização" className={`${inputClasses} flex-grow`} />
      </div>
      {/* Campo de seleção de data adicionado aqui */}
      <div className="mb-4">
        <input
          type="date"
          name="date"
          value={newCertification.date}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>
      <button type="button" onClick={handleAdd} className={buttonClasses}>Adicionar</button>
      <ul className="space-y-2 mt-4">
        {certifications.map(cert => (
          <li key={cert.id} className="flex justify-between items-center bg-gray-800 p-2 rounded">
            <span>{cert.name} - {cert.organization} ({cert.date})</span>
            <button type="button" onClick={() => handleRemove(cert.id)} className="text-red-500 hover:text-red-400">Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CertificationsForm;