import { useState } from "react";
import Form from "./components/Form";
import Preview from "./components/Preview";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export interface Skill {
  id: number;
  name: string;
  level: "Básico" | "Intermediário" | "Avançado";
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  current: boolean;
}

export interface ResumeData {
  personal: {
    name: string;
    email: string;
    phone: string;
    linkedin: string;
    summary: string;
  };
  skills: Skill[];
  experiences: Experience[];
}

export default function App() {
  const [resume, setResume] = useState<ResumeData>({
    personal: {
      name: "",
      email: "",
      phone: "",
      linkedin: "",
      summary: "",
    },
    skills: [],
    experiences: [],
  });

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <div className="w-1/2 overflow-y-auto p-6 border-r">
          <Form resume={resume} setResume={setResume} />
        </div>
        <div className="w-1/2 overflow-y-auto p-6">
          <Preview resume={resume} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
