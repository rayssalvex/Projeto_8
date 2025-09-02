import React from 'react';
import { ResumeData } from '../types';
import { 
  FaUser, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub, 
  FaPlus,
  FaEnvelope,
  FaPhone,
  FaBirthdayCake,
  FaVenusMars,
  FaRing,
  FaFlag,
  FaGlobe
} from 'react-icons/fa';

interface Props {
  data: ResumeData;
}

const Preview: React.FC<Props> = ({ data }) => {
  const { personalInfo, experiences, education, languages, volunteering, certifications } = data;

  const formatBrazilianDate = (dateString: string) => {
    if (!dateString) return 'Data de Nascimento';
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };

  // Nova constante para padronizar o estilo de todos os ícones
  const iconClasses = "mr-3 text-sky-700 text-base flex-shrink-0"; 

  return (
    <div className="bg-slate-700 p-8 font-sans print:p-0 print:bg-white">
      <div className="w-full max-w-4xl mx-auto bg-white shadow-lg flex min-h-[29.7cm] rounded-lg overflow-hidden">
        
        <aside className="w-1/3 bg-cream text-slate-700 p-6 relative flex flex-col items-center">
        
          <div className="absolute top-0 left-0 right-0 h-5 bg-sky-700 rounded-b-[100px]"></div>

          <div className="relative z-20 w-36 h-36 rounded-full bg-sky-700 flex items-center justify-center overflow-hidden mt-8 mb-2 shadow-md border-4 border-sky-700">
            {personalInfo.photoUrl ? (
              <img src={personalInfo.photoUrl} alt="Foto de Perfil" className="w-full h-full object-cover" />
            ) : (
              <FaUser className="text-white text-5xl" />
            )}
          </div>

          <section className="mt-8 px-6 w-full">
            <h2 className="text-xl font-semibold border-b-2 border-slate-400 pb-2">Dados Pessoais</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center"><FaUser className={iconClasses} /><span>{personalInfo.name || 'Seu Nome'}</span></li>
              <li className="flex items-center"><FaMapMarkerAlt className={iconClasses} /><span className="break-all">{personalInfo.placeOfBirth || 'Sua Cidade'}</span></li>
              
              <li className="flex items-center"><FaEnvelope className={iconClasses} /><span className="break-all">{personalInfo.email || 'seu-email@exemplo.com'}</span></li>
              
              <li className="flex items-center"><FaPhone className={iconClasses} /><span>{personalInfo.phone || 'Seu Telefone'}</span></li>
          
              <li className="flex items-center"><FaBirthdayCake className={iconClasses} /><span>{formatBrazilianDate(personalInfo.dateOfBirth)}</span></li>
              
              {personalInfo.linkedin && (
                <li className="flex items-center">
                  <FaLinkedin className={iconClasses} />
                  <a 
                    href={`https://linkedin.com/in/${personalInfo.linkedin.replace('https://', '').replace('http://', '').replace('www.', '').replace('linkedin.com/in/', '')}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:underline break-all"
                  >
                    {personalInfo.linkedin.replace('https://www.linkedin.com/in/', '')}
                  </a>
                </li>
              )}

              {personalInfo.github && (
                <li className="flex items-center">
                  <FaGithub className={iconClasses} />
                  <a 
                    href={`https://github.com/${personalInfo.github.replace('https://', '').replace('http://', '').replace('github.com/', '')}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:underline break-all"
                  >
                    {personalInfo.github.replace('https://github.com/', '')}
                  </a>
                </li>
              )}
              
              {personalInfo.gender && <li className="flex items-center"><FaVenusMars className={iconClasses} /><span>{personalInfo.gender}</span></li>}
              {personalInfo.civilStatus && <li className="flex items-center"><FaRing className={iconClasses} /><span>{personalInfo.civilStatus}</span></li>}
              {personalInfo.nationality && <li className="flex items-center"><FaFlag className={iconClasses} /><span>{personalInfo.nationality}</span></li>}
              {personalInfo.website && <li className="flex items-center"><FaGlobe className={iconClasses} /><span><a href={personalInfo.website} className="hover:underline break-all">{personalInfo.website}</a></span></li>}
              {personalInfo.customField && <li className="flex items-center"><FaPlus className={iconClasses} /><span className="break-all">{personalInfo.customField}</span></li>}
            </ul>
          </section>

          <section className="mt-8 px-6 w-full">
            <h2 className="text-xl font-semibold border-b-2 border-slate-400 pb-2">Idiomas</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {languages.length > 0 ? (
                languages.map(lang => 
                <li key={lang.id} className="flex flex gap-2 items-center p-2">
                  <span>{lang.name}</span>
                  <span className="text-gray-500 text-sm">{("(" + lang.level + ")")}</span>
                </li>

                )) : 
                (
                <li className="text-slate-500">Adicione idiomas...</li>)}
            </ul>
          </section>

          <div className="absolute inset-x-0 bottom-0 h-5 bg-sky-700 rounded-t-[100px]"></div>
        </aside>

        <main className="w-2/3 flex-grow p-8 text-gray-700 bg-white">
          <h1 className="text-5xl font-bold text-slate-800 mb-8">{personalInfo.name || 'Nome Completo'}</h1>
          
          <section className="mb-6">
            <h2 className="text-2xl font-bold text-slate-700 border-b-2 border-gray-300 pb-2 mb-4">Formação</h2>
            <div className="space-y-4">
              {education.length > 0 ? (education.map((edu) => (<div key={edu.id} className="text-sm"><div className="flex justify-between"><p className="font-bold">{edu.course || 'Curso'}</p><p className="text-gray-600">{edu.period || 'Período'}</p></div><p className="italic">{edu.institution || 'Instituição'}</p></div>))) : (<p className="text-sm text-gray-500">Adicione sua formação...</p>)}
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-bold text-slate-700 border-b-2 border-gray-300 pb-2 mb-4">Experiências Profissionais</h2>
            <div className="space-y-4">
              {experiences.length > 0 ? experiences.map(exp => (<div key={exp.id} className="text-sm"><div className="flex justify-between"><p className="font-bold">{exp.role || 'Cargo'}</p><p className="text-gray-600">{exp.period || 'Período'}</p></div><p className="italic">{exp.company || 'Empresa, Local'}</p><p className="mt-1 leading-relaxed">{exp.description || 'Descrição da sua função.'}</p></div>)) : (<p className="text-sm text-gray-500">Adicione suas experiências...</p>)}
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-bold text-slate-700 border-b-2 border-gray-300 pb-2 mb-4">Voluntariado</h2>
            <div className="space-y-4">
              {volunteering.length > 0 ? volunteering.map(vol => (<div key={vol.id} className="text-sm"><div className="flex justify-between"><p className="font-bold">{vol.role || 'Cargo'}</p><p className="text-gray-600">{vol.period || 'Período'}</p></div><p className="italic">{vol.organization || 'Organização'}</p><p className="mt-1 leading-relaxed">{vol.description || 'Descrição.'}</p></div>)) : (<p className="text-sm text-gray-500">Adicione suas experiências de voluntariado...</p>)}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-700 border-b-2 border-gray-300 pb-2 mb-4">Certificações</h2>
            <div className="space-y-4">
              {certifications.length > 0 ? certifications.map(cert => (<div key={cert.id} className="text-sm"><div className="flex justify-between"><p className="font-bold">{cert.name || 'Nome da Certificação'}</p><p className="text-gray-600">{cert.date || 'Data'}</p></div><p className="italic">{cert.organization || 'Organização Emissora'}</p></div>)) : (<p className="text-sm text-gray-500">Adicione suas certificações...</p>)}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Preview;