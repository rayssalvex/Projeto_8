import { ResumeData } from "../App";

interface Props {
  resume: ResumeData;
  setResume: React.Dispatch<React.SetStateAction<ResumeData>>;
}

export default function PersonalDataForm({ resume, setResume }: Props) {
  const updateField = (field: string, value: string) => {
    setResume((prev) => ({
      ...prev,
      personal: { ...prev.personal, [field]: value },
    }));
  };

  return (
    <div>
      <h3 className="font-semibold mb-2">Dados Pessoais</h3>
      <input type="text" placeholder="Nome" className="w-full border p-2 mb-2"
        value={resume.personal.name} onChange={(e) => updateField("name", e.target.value)} />
      <input type="email" placeholder="Email" className="w-full border p-2 mb-2"
        value={resume.personal.email} onChange={(e) => updateField("email", e.target.value)} />
      <input type="text" placeholder="Telefone" className="w-full border p-2 mb-2"
        value={resume.personal.phone} onChange={(e) => updateField("phone", e.target.value)} />
      <input type="text" placeholder="LinkedIn" className="w-full border p-2 mb-2"
        value={resume.personal.linkedin} onChange={(e) => updateField("linkedin", e.target.value)} />
      <textarea placeholder="Resumo profissional" className="w-full border p-2"
        value={resume.personal.summary} onChange={(e) => updateField("summary", e.target.value)} />
      <p className="text-sm text-gray-500">{resume.personal.summary.length}/500 caracteres</p>
    </div>
  );
}
