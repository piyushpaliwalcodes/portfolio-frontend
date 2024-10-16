import { Badge } from "@mantine/core";
import { Skillinfo } from "src/User";
import Skillcard from "src/components/Skillcard";
const Skills = () => {
  return (
    <div className="px-16 mx-20 my-5 font-mono  " id="SKILLS">
      <h1 className="text-4xl font-bold text-white text-center mt-8 mb-3">
        <span className="text-primaryColor ">03.&nbsp; </span>Skills
      </h1>
      <div className="flex flex-wrap gap-5 m-2 ">
        {Skillinfo.map((skill: any, index: number) => {
          return (
            <Skillcard title={skill.title} skills={skill.skills} key={index} />
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
