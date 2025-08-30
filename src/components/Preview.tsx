import React from 'react';
import { ResumeData } from '../types';
import { FaUser, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPlus} from 'react-icons/fa';

interface Props {
  data: ResumeData;
}

const Preview: React.FC<Props> = ({ data }) => {
  // Garantindo que todos os dados sejam extraídos
  const { personalInfo, experiences, education, languages, volunteering, certifications } = data;

  return (
    <div className="bg-gray-200 p-8 font-sans print:p-0 print:bg-white">
      <div className="w-full max-w-4xl mx-auto bg-white shadow-lg flex min-h-[29.7cm] rounded-lg overflow-hidden">
        
        {/* Coluna Esquerda (Sidebar) com o novo estilo */}
        <aside className="w-1/3 bg-cream text-slate-700 p-6 relative">
          {/* Topo curvo azul */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-sky-700 rounded-b-[100px]"></div>

          <section className="mt-20">
            <h2 className="text-xl font-semibold border-b-2 border-slate-400 pb-2">Dados Pessoais</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center"><FaUser className="mr-3 text-sky-700" /><span>{personalInfo.name || 'Seu Nome'}</span></li>
              <li className="flex items-center"><FaMapMarkerAlt className="mr-3 text-sky-700" /><span>{personalInfo.placeOfBirth || 'Sua Cidade'}</span></li>
              <li className="flex items-center"><span className="mr-3">📧</span><span>{personalInfo.email || 'seu-email@exemplo.com'}</span></li>
              <li className="flex items-center"><span className="mr-3">📞</span><span>{personalInfo.phone || 'Seu Telefone'}</span></li>
              <li className="flex items-center"><span className="mr-3">🎂</span><span>{personalInfo.dateOfBirth || 'Data de Nascimento'}</span></li>
              <li className="flex items-center"><FaLinkedin className="mr-3 text-sky-700" /><a href={personalInfo.linkedin || '#'} className="hover:underline break-all">{personalInfo.linkedin ? personalInfo.linkedin.replace('https://www.', '') : 'Seu linkedin'}</a></li>
              <li className="flex items-center"><FaGithub className="mr-3 text-sky-700" /><a href={personalInfo.github || '#'} className="hover:underline break-all">{personalInfo.github ? personalInfo.github.replace('https://www.', '') : 'Seu github'}</a></li>
              {personalInfo.gender && <li className="flex items-center"><span className="mr-3">⚧️</span><span>{personalInfo.gender}</span></li>}
              {personalInfo.civilStatus && <li className="flex items-center"><span className="mr-3">💍</span><span>{personalInfo.civilStatus}</span></li>}
              {personalInfo.nationality && <li className="flex items-center"><span className="mr-3">🗺️</span><span>{personalInfo.nationality}</span></li>}
              {personalInfo.website && <li className="flex items-center"><span className="mr-3">🌐</span><span><a href={personalInfo.website} className="hover:underline break-all">{personalInfo.website}</a></span></li>}
              {personalInfo.customField && <li className="flex items-center"><FaPlus className="mr-3 text-sky-700" /><span>{personalInfo.customField}</span></li>}
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold border-b-2 border-slate-400 pb-2">Idiomas</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {languages.length > 0 ? (
                languages.map(lang => <li key={lang.id}>{lang.name}</li>)
              ) : (
                <li className="text-slate-500">Adicione idiomas...</li>
              )}
            </ul>
          </section>

          {/* Rodapé curvo azul */}
          <div className="absolute inset-x-0 bottom-0 h-10 bg-sky-700 rounded-t-[100px]"></div>
        </aside>

        {/* Coluna Direita (Conteúdo Principal) */}
        <main className="w-2/3 flex-grow p-8 text-gray-700 bg-white">
          <h1 className="text-5xl font-bold text-slate-800 mb-8">{personalInfo.name || 'Nome'}</h1>
          
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