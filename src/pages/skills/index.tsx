import skillsData from "../../data/skills.json";
import type { SkillsData } from "../../types/profile";
import Languages from "./Languages";
import SoftSkills from "./SoftSkills";
import TechnicalSkills from "./TechnicalSkills";

const data = skillsData as SkillsData;


function SkillsPage() {
  return (
    <section className="relative min-h-[calc(100vh-69px)] bg-[var(--bg)] overflow-hidden flex gap-4 justify-center">   
        <TechnicalSkills categories={data.technical} />
        <div className="flex flex-col gap-4">          
          <SoftSkills skills={data.softSkills} />
          <Languages languages={data.languages} />
        </div>

    </section>
  );
}

export default SkillsPage;