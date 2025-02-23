import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "./skillconstant";
import React from "react";
import SkillDataProvider from "./skillDataProvider";
import SkillText from "./skillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />

      {[Skill_data, Frontend_skill, Backend_skill, Full_stack, Other_skill].map(
        (skills, i) => (
          <div key={i} className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
            {skills.map((image, index) => (
              <SkillDataProvider
                key={index}
                src={image.Image}
                width={image.width}
                height={image.height}
                index={index}
              />
            ))}
          </div>
        )
      )}

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video className="w-full h-auto" preload="false" playsInline loop muted autoPlay src="./cards-video.webm" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
