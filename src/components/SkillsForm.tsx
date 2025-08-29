import { ResumeData, Skill } from "../App";

interface Props {
  resume: ResumeData;
  setResume: React.Dispatch<React.SetStateAction<ResumeData>>;
}

export default function SkillsForm({ resume, setResume }: Props) {
  const addSkill = () => {
    const newSkill: Skill = { id: Date.now(), name: "", level: "Básico" };
    setResume((prev) => ({ ...prev, skills: [...prev.skills, newSkill] }));
  };

  const updateSkill = (id: number, field: keyof Skill, value: string) => {
    setResume((prev) => ({
      ...prev,
      skills: prev.skills.map((s) => (s.id === id ? { ...s, [field]: value } : s)),
    }));
  };

  const removeSkill = (id: number) => {
    setResume((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s.id !== id),
    }));
  };

  return (
    <div>
      <h3 className="font-semibold mb-2">Habilidades</h3>
      <button type="button" className="bg-blue-500 text-white px-3 py-1 rounded mb-2"
        onClick={addSkill}>Adicionar Habilidade</button>
      {resume.skills.map((skill) => (
        <div key={skill.id} className="flex gap-2 mb-2">
          <input type="text" placeholder="Habilidade" className="border p-2 flex-1"
            value={skill.name} onChange={(e) => updateSkill(skill.id, "name", e.target.value)} />
          <select className="border p-2" value={skill.level}
            onChange={(e) => updateSkill(skill.id, "level", e.target.value as Skill["level"])}>
            <option>Básico</option>
            <option>Intermediário</option>
            <option>Avançado</option>
          </select>
          <button type="button" className="bg-red-500 text-white px-2"
            onClick={() => removeSkill(skill.id)}>X</button>
        </div>
      ))}
    </div>
  );
}
