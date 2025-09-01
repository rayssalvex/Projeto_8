import React from 'react';
import { PersonalInfo, ResumeData } from '../types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';

interface Props {
  personalInfo: PersonalInfo;
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
}

const PersonalDataForm: React.FC<Props> = ({ personalInfo, setResumeData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setResumeData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [name]: value },
    }));
  };
  
  const handleDateChange = (date: Date | null) => {
    // Formata a data para AAAA-MM-DD para compatibilidade com o input type="date" e estado
    const formattedDate = date ? date.toISOString().split('T')[0] : '';
    setResumeData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, dateOfBirth: formattedDate },
    }));
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; 
    if (file) {
      const url = URL.createObjectURL(file);
      setResumeData(prev => ({
        ...prev,
        personalInfo: {
          ...prev.personalInfo,
          photoUrl: url,
        },
      }));
    }
  };
  
  const inputClasses = "bg-gray-800 border border-gray-600 rounded-md p-2 w-full text-gray-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary";

  return (
    <div className="p-4 border border-gray-700 rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-white">Dados Pessoais</h2>

      <div className="mb-4">
        <label htmlFor="photo-upload" className="block text-gray-400">
          Foto de Perfil
        </label>
        <div className="w-full mt-1 p-2 bg-gray-800 text-gray-400 border border-gray-600 rounded-md placeholder-gray-400 focus-within:ring-2 focus-within:ring-primary flex items-center space-x-2">
          <label
            htmlFor="photo-upload"
            className="bg-gradient-custom text-white font-semibold py-1 px-3 rounded-md cursor-pointer hover:opacity-70 transition-opacity duration-200 whitespace-nowrap"
          >
            Escolher arquivo
          </label>
          <span className="text-gray-400 truncate">
            {personalInfo.photoUrl ? "Arquivo escolhido" : "Nenhum arquivo escolhido"}
          </span>
          <input
            type="file"
            id="photo-upload"
            name="photoUrl"
            accept="image/*"
            onChange={handlePhotoChange}
            className="hidden"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="name"
          value={personalInfo.name}
          onChange={handleChange}
          placeholder="Nome Completo"
          className={inputClasses}
        />
        <input
          name="email"
          value={personalInfo.email}
          onChange={handleChange}
          placeholder="Email"
          className={inputClasses}
        />
        <input
          name="phone"
          value={personalInfo.phone}
          onChange={handleChange}
          placeholder="Telefone"
          className={inputClasses}
        />
        <input
          name="linkedin"
          value={personalInfo.linkedin}
          onChange={handleChange}
          placeholder="URL do LinkedIn"
          className={inputClasses}
        />
        <div className="relative">
          <DatePicker
            selected={personalInfo.dateOfBirth ? new Date(personalInfo.dateOfBirth) : null}
            onChange={handleDateChange}
            placeholderText="Data de Nascimento"
            dateFormat="dd/MM/yyyy"
            wrapperClassName="w-full" 
            className={inputClasses}
          />
          <FaCalendarAlt className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400" />
        </div>
        <input
          name="github"
          value={personalInfo.github}
          onChange={handleChange}
          placeholder="URL do GitHub"
          className={inputClasses}
        />
        <select
          name="gender"
          value={personalInfo.gender}
          onChange={handleChange}
          className={inputClasses}
        >
          <option value="" disabled>Selecione o Gênero</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Não-binário">Não Binário</option>
          <option value="Prefiro não informar">Prefiro não informar</option>
        </select>
        <select
          name="civilStatus"
          value={personalInfo.civilStatus}
          onChange={handleChange} 
          className={inputClasses}
        >
          <option value="" disabled>Selecione o Estado Civil</option>
          <option value="Solteiro">Solteiro(a)</option>
          <option value="Casado">Casado(a)</option>
          <option value="Divorciado">Divorciado(a)</option>
          <option value="Viuvo">Viúvo(a)</option>
          <option value="Separado">Separado(a)</option>
           <option value="União Estável">União Estável</option>
        </select>
        <input
          name="placeOfBirth"
          value={personalInfo.placeOfBirth}
          onChange={handleChange}
          placeholder="Local de Nascimento"
          className={inputClasses}
        />
        <input
          name="nationality"
          value={personalInfo.nationality}
          onChange={handleChange}
          placeholder="Nacionalidade"
          className={inputClasses}
        />
        <input
          name="website"
          value={personalInfo.website}
          onChange={handleChange}
          placeholder="Website"
          className={inputClasses}
        />
        <input
          name="customField"
          value={personalInfo.customField}
          onChange={handleChange}
          placeholder="Campo Personalizado (Ex: Portfólio)"
          className={inputClasses}
        />
      </div>
    </div>
  );
};

export default PersonalDataForm;
