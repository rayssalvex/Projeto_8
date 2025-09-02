import React from 'react';
import { ResumeData } from '../types';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import PersonalDataForm from './PersonalDataForm';
import SkillsForm from './SkillsForm';
import ExperienceForm from './ExperienceForm';
import LinkedInImportButton from './LinkedInImportButton';
import EducationForm from './EducationForm';
import LanguagesForm from './LanguagesForm';
import VolunteeringForm from './VolunteeringForm';
import CertificationsForm from './CertificationsForm';
import brendaPhoto from '../image/Brenda-documento.png';

interface Props {
  resumeData: ResumeData;
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
}

const Form: React.FC<Props> = ({ resumeData, setResumeData }) => {
  
  const handleLinkedInImport = () => {
    const mockLinkedInData: ResumeData = {
      personalInfo: {
      photoUrl: brendaPhoto,
      name: 'Brenda Oliveira',
      email: 'brenda@example.com',
      phone: '(47) 99876-5432',
      linkedin: 'https://linkedin.com/in/brenda-oliveira-dev',
      github: 'https://github.com/brenda-dev',
      dateOfBirth: '1995-05-15',
      placeOfBirth: 'Joinville, SC',
      gender: 'Feminino',
      nationality: 'Brasileira',
      civilStatus: 'Solteira',
      website: 'https://seusite.com',
      customField: 'Disponibilidade para realocação'
      },
      skills: [
      { id: 'skill-1', name: 'React', level: 'Avançado' },
      { id: 'skill-2', name: 'TypeScript', level: 'Avançado' },
      { id: 'skill-3', name: 'Node.js', level: 'Intermediário' },
      { id: 'skill-4', name: 'SQL', level: 'Intermediário' }
      ],
      experiences: [
      {
        id: 'exp-1',
        company: 'Tech Solutions Inc.',
        role: 'Desenvolvedora Front-end Pleno',
        startDate: '2022-01-01',
        endDate: '',
        description: 'Desenvolvimento e manutenção de interfaces de usuário com React e TypeScript. Colaboração em equipes ágeis para entregar novas funcionalidades.',
        current: true
      },
      {
        id: 'exp-2',
        company: 'Inova Web Ltda.',
        role: 'Desenvolvedora Júnior',
        startDate: '2020-07-01',
        endDate: '2021-12-31',
        description: 'Criação de websites responsivos e otimizados para clientes de diversos setores, utilizando HTML, CSS e JavaScript.',
        current: false
      }
      ],
      education: [
      {
        id: 'edu-1',
        course: 'Análise e Desenvolvimento de Sistemas',
        institution: 'Gran Faculdade',
        startDate: '2024-01-01',
        endDate: '2026-12-31'
      }
      ],
      languages: [
      { id: 'lang-1', name: 'Português', level: 'Nativo' },
      { id: 'lang-2', name: 'Inglês', level: 'Avançado' },
      { id: 'lang-3', name: 'Espanhol', level: 'Intermediário' }
      ],
      volunteering: [
      {
        id: 'vol-1',
        organization: 'Code for All Brasil',
        role: 'Mentora de Programação',
        startDate: '2023-02-01',
        endDate: '2023-12-31',
        description: 'Mentoria para iniciantes na área de tecnologia, auxiliando em projetos de front-end com React e boas práticas de desenvolvimento.'
      }
      ],
      certifications: [
      {
        id: 'cert-1',
        name: 'AWS Certified Cloud Practitioner',
        organization: 'Amazon Web Services (AWS)',
        date: '2023-03-01'
      },
      {
        id: 'cert-2',
        name: 'Scrum Foundation Professional Certificate (SFPC)',
        organization: 'CertiProf',
        date: '2022-08-01'
      }
      ]
    };
    setResumeData(mockLinkedInData);

    Swal.fire({
      title: 'Sucesso!',
      text: 'Dados do perfil do LinkedIn importados.',
      icon: 'success',
      background: '#1f2937',
      color: '#d1d5db',   
      confirmButtonColor: '#3b82f6',
      confirmButtonText: 'Ótimo!'
    });
  };

  return (
    <div className="p-6 bg-gray-900 space-y-8">
      <div className="p-4 border border-gray-700 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-white">Importar Dados</h2>
          <LinkedInImportButton onClick={handleLinkedInImport} />
      </div>

      <PersonalDataForm personalInfo={resumeData.personalInfo} setResumeData={setResumeData} />
      <EducationForm education={resumeData.education} setResumeData={setResumeData} />
      <LanguagesForm languages={resumeData.languages} setResumeData={setResumeData} />
      <SkillsForm skills={resumeData.skills} setResumeData={setResumeData} />
      <ExperienceForm experiences={resumeData.experiences} setResumeData={setResumeData} />
      <VolunteeringForm volunteering={resumeData.volunteering} setResumeData={setResumeData} />
      <CertificationsForm certifications={resumeData.certifications} setResumeData={setResumeData} />
    </div>
  );
};

export default Form;
