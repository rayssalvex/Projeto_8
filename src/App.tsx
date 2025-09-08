import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Preview from "./components/Preview";
import HomePage from "./components/HomePage";
import { ResumeData } from "./types";

function App() {
  const [showEditor, setShowEditor] = useState(false);

  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      name: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      dateOfBirth: "",
      placeOfBirth: "",
      gender: "",
      nationality: "",
      civilStatus: "",
      website: "",
      customField: "",
      photoUrl: "",
    },
    summary: "",
    skills: [],
    experiences: [],
    education: [],
    languages: [],
    volunteering: [],
    certifications: [],
  });

  if (!showEditor) {
    return <HomePage onStart={() => setShowEditor(true)} />;
  }

  return (
    <div className="flex flex-col h-screen bg-gray-900">
      <div className="print:hidden">
        <Navbar />
      </div>

      <main className="flex flex-1 overflow-hidden">
        <div className="w-1/2 overflow-y-auto print:hidden">
          <Form resumeData={resumeData} setResumeData={setResumeData} />
        </div>

        <div className="w-1/2 overflow-y-auto print:w-full">
          <Preview data={resumeData} />
        </div>
      </main>

      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
}

export default App;