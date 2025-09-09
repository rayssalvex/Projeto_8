import React from 'react';
import { ResumeData, Certification } from '../types';

interface Props {
  certifications: Certification[];
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
}

const CertificationsForm: React.FC<Props> = ({ certifications, setResumeData }) => {
  const handleAdd = () => {
    const newCert: Certification = {
      id: crypto.randomUUID(),
      name: '',
      organization: '',
      date: '',
    };
    setResumeData(prev => ({ ...prev, certifications: [...prev.certifications, newCert] }));
  };

  const handleRemove = (id: string) => {
    setResumeData(prev => ({ ...prev, certifications: prev.certifications.filter(cert => cert.id !== id) }));
  };

  const handleChange = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setResumeData(prev => ({
      ...prev,
      certifications: prev.certifications.map(cert =>
        cert.id === id ? { ...cert, [name]: value } : cert
      ),
    }));
  };

  const inputClasses = "bg-gray-800 border border-gray-600 rounded-md p-2 w-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary";
  const buttonClasses = "bg-gradient-custom text-white font-bold py-2 px-4 rounded-md hover:opacity-70 transition-opacity duration-200 whitespace-nowrap";

  return (
    <div className="p-4 border border-gray-700 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-white">Certificações</h2>
        <button type="button" onClick={handleAdd} className={buttonClasses}>Adicionar</button>
      </div>

      <div className="space-y-4">
        {certifications.map(cert => (
          <div key={cert.id} className="p-3 border border-gray-600 rounded-md relative">
            <button
              type="button"
              onClick={() => handleRemove(cert.id)}
              className="absolute top-2 right-3 text-red-500 hover:text-red-400 font-bold"
              title='Remover'
            >
              ⨉
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="name"
                value={cert.name}
                onChange={(e) => handleChange(cert.id, e)}
                placeholder="Nome da Certificação"
                className={`${inputClasses} mt-6`}
              />
              <input
                name="organization"
                value={cert.organization}
                onChange={(e) => handleChange(cert.id, e)}
                placeholder="Organização"
                className={`${inputClasses} mt-6`}
              />
            </div>
            <div className="mt-4">
              <input
                type="date"
                name="date"
                value={cert.date}
                onChange={(e) => handleChange(cert.id, e)}
                className={inputClasses}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationsForm;