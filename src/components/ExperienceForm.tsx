import { ResumeData, Experience } from "../App";

interface Props {
  resume: ResumeData;
  setResume: React.Dispatch<React.SetStateAction<ResumeData>>;
}

export default function ExperienceForm({ resume, setResume }: Props) {
  const addExperience = () => {
    const newExp: Experience = { id: Date.now(), company: "", role: "", period: "", description: "", current: false };
    setResume((prev) => ({ ...prev, experiences: [...prev.experiences, newExp] }));
  };

  const updateExp = (id: number, field: keyof Experience, value: any) => {
    setResume((prev) => ({
      ...prev,
      experiences: prev.experiences.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp)),
    }));
  };

  const removeExp = (id: number) => {
    setResume((prev) => ({
      ...prev,
      experiences: prev.experiences.filter((exp) => exp.id !== id),
    }));
  };

  return (
    <div>
      <h3 className="font-semibold mb-2">Experiências</h3>
      <button type="button" className="bg-blue-500 text-white px-3 py-1 rounded mb-2"
        onClick={addExperience}>Adicionar Experiência</button>
      {resume.experiences.map((exp) => (
        <div key={exp.id} className="border p-2 mb-2 space-y-2">
          <input type="text" placeholder="Empresa" className="w-full border p-2"
            value={exp.company} onChange={(e) => updateExp(exp.id, "company", e.target.value)} />
          <input type="text" placeholder="Cargo" className="w-full border p-2"
            value={exp.role} onChange={(e) => updateExp(exp.id, "role", e.target.value)} />
          <input type="text" placeholder="Período" className="w-full border p-2"
            value={exp.period} onChange={(e) => updateExp(exp.id, "period", e.target.value)} />
          <textarea placeholder="Descrição" className="w-full border p-2"
            value={exp.description} onChange={(e) => updateExp(exp.id, "description", e.target.value)} />
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={exp.current}
              onChange={(e) => updateExp(exp.id, "current", e.target.checked)} />
            Trabalho atual
          </label>
          <button type="button" className="bg-red-500 text-white px-2"
            onClick={() => removeExp(exp.id)}>Remover</button>
        </div>
      ))}
    </div>
  );
}
