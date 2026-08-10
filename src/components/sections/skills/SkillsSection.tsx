import skillsData from "../../../data/skills.json";
import Languages from "./Languages";
import SoftSkills from "./SoftSkills";
import TechnicalSkills from "./TechnicalSkills";
import { Reveal } from "../../common/Reveal";

const data = skillsData as SkillsData;

function SkillsSection() {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-6 justify-center">
      <Reveal direction="up" className="flex-1">
        <TechnicalSkills categories={data.technical} />
      </Reveal>
      <div className="flex-1 flex flex-col gap-6">
        <Reveal direction="up">
          <SoftSkills skills={data.softSkills} />
        </Reveal>
        <Reveal direction="up">
          <Languages languages={data.languages} />
        </Reveal>
      </div>
    </div>
  );
}

export default SkillsSection;
