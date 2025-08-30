import React from 'react';
import { PersonalInfo, ResumeData } from '../types';

interface Props {
  personalInfo: PersonalInfo;
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
}

const PersonalDataForm: React.FC<Props> = ({ personalInfo, setResumeData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setResumeData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [name]: value },
    }));
 };

  // --- FUNÇÃO ADICIONADA PARA O UPLOAD DA FOTO ---
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Pega o primeiro arquivo selecionado
    const file = e.target.files?.[0]; 
    if (file) {
      // Cria uma URL temporária do arquivo para a pré-visualização
      const url = URL.createObjectURL(file);
      setResumeData(prev => ({
        ...prev,
        personalInfo: {
          ...prev.personalInfo,
          photoUrl: url, // Atualiza o estado com a URL da foto
        },
      }));
    }
  };
  
  const inputClasses = "bg-gray-800 border border-gray-600 rounded-md p-2 w-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary";

  return (
  <div className="p-4 border border-gray-700 rounded-lg">
    <h2 className="text-xl font-semibold mb-4 text-white">Dados Pessoais</h2>
      
      {/* --- CAMPO ADICIONADO PARA O UPLOAD DE ARQUIVO --- */}
      <div className="mb-4">
        <label htmlFor="photo-upload" className="block text-gray-400">Foto de Perfil</label>
        <input
          type="file"
          id="photo-upload"
          name="photoUrl"
          accept="image/*"
          onChange={handlePhotoChange} // Usa a nova função
          className="w-full mt-1 p-2 bg-gray-800 text-white border border-gray-600 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Cada input agora tem a propriedade 'value' conectada ao estado */}
        <input name="name" value={personalInfo.name} onChange={handleChange} placeholder="Nome Completo" className={inputClasses} />
        <input name="email" value={personalInfo.email} onChange={handleChange} placeholder="Email" className={inputClasses} />
        
        <input name="phone" value={personalInfo.phone} onChange={handleChange} placeholder="Telefone" className={inputClasses} />
        <input name="linkedin" value={personalInfo.linkedin} onChange={handleChange} placeholder="URL do LinkedIn" className={inputClasses} />

        <input name="dateOfBirth" value={personalInfo.dateOfBirth} onChange={handleChange} placeholder="Data de Nascimento" className={inputClasses} />
        <input name="github" value={personalInfo.github} onChange={handleChange} placeholder="URL do GitHub" className={inputClasses} />
        
        <input name="gender" value={personalInfo.gender} onChange={handleChange} placeholder="Gênero" className={inputClasses} />
        <input name="civilStatus" value={personalInfo.civilStatus} onChange={handleChange} placeholder="Estado Civil" className={inputClasses} />
        
        <input name="placeOfBirth" value={personalInfo.placeOfBirth} onChange={handleChange} placeholder="Local de Nascimento" className={inputClasses} />
        <input name="nationality" value={personalInfo.nationality} onChange={handleChange} placeholder="Nacionalidade" className={inputClasses} />

        <input name="website" value={personalInfo.website} onChange={handleChange} placeholder="Website" className={inputClasses} />
        <input name="customField" value={personalInfo.customField} onChange={handleChange} placeholder="Campo Personalizado (Ex: Portfólio)" className={inputClasses} />
      </div>
    </div>
  );
};

export default PersonalDataForm;