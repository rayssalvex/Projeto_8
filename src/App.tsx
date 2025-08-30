import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Form from './components/Form';
import Preview from './components/Preview';
import { ResumeData } from './types';

function App() {
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: { name: '', email: '', phone: '', linkedin: '', github: '', dateOfBirth: '', placeOfBirth: '', gender: '', nationality: '', civilStatus: '', website: '', customField: '', },
    skills: [],
    experiences: [],
    education: [],
    languages: [],
    volunteering: [],
    certifications: [],
  });

  return (
    <div className="flex flex-col h-screen">
      {/* Adiciona print:hidden para esconder a Navbar */}
      <div className="print:hidden">
        <Navbar />
      </div>

      <main className="flex flex-1 overflow-hidden">
        {/* Adiciona print:hidden para esconder toda a coluna do formulário */}
        <div className="w-1/2 overflow-y-auto print:hidden">
          <Form resumeData={resumeData} setResumeData={setResumeData} />
        </div>
        
        {/* Adiciona print:w-full para o preview ocupar 100% da página na impressão */}
        <div className="w-1/2 overflow-y-auto print:w-full">
          <Preview data={resumeData} />
        </div>
      </main>

      {/* Adiciona print:hidden para esconder o Footer */}
      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
}

export default App;