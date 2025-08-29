import { ResumeData } from "../App";
import PersonalDataForm from "./PersonalDataForm";
import SkillsForm from "./SkillsForm";
import ExperienceForm from "./ExperienceForm";

interface Props {
  resume: ResumeData;
  setResume: React.Dispatch<React.SetStateAction<ResumeData>>;
}

export default function Form({ resume, setResume }: Props) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold">Formulário</h2>
      <PersonalDataForm resume={resume} setResume={setResume} />
      <SkillsForm resume={resume} setResume={setResume} />
      <ExperienceForm resume={resume} setResume={setResume} />
    </div>
  );
}
