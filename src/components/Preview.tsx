import { ResumeData } from "../App";

interface Props {
  resume: ResumeData;
}

export default function Preview({ resume }: Props) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Preview do Seu Currículo</h2>
      <div>
        <h3 className="text-lg font-semibold">{resume.personal.name || "Seu Nome"}</h3>
        <p>{resume.personal.email || "email@exemplo.com"}</p>
        <p>{resume.personal.phone || "(00) 00000-0000"}</p>
        <p>{resume.personal.linkedin || "linkedin.com/in/seu-perfil"}</p>
        <p className="mt-2 italic">{resume.personal.summary || "Resumo profissional..."}</p>
      </div>
      <div>
        <h3 className="font-semibold">Habilidades</h3>
        <ul className="list-disc ml-6">
          {resume.skills.length > 0 ? (
            resume.skills.map((s) => (
              <li key={s.id}>{s.name} - <span className="text-gray-600">{s.level}</span></li>
            ))
          ) : (
            <p className="text-gray-400">Nenhuma habilidade adicionada</p>
          )}
        </ul>
      </div>
      <div>
        <h3 className="font-semibold">Experiências</h3>
        {resume.experiences.length > 0 ? (
          resume.experiences.map((exp) => (
            <div key={exp.id} className="mb-4">
              <p className="font-bold">{exp.role} - {exp.company}</p>
              <p className="text-sm text-gray-600">{exp.current ? "Atualmente" : exp.period}</p>
              <p>{exp.description}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-400">Nenhuma experiência adicionada</p>
        )}
      </div>
    </div>
  );
}
