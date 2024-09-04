import React from 'react';
import { FaReact,FaGithub, FaNpm, FaFigma, FaBootstrap } from "react-icons/fa";
import {  DiJava, DiJavascript1 } from "react-icons/di";
import { SiNextdotjs, SiPostman, SiPython, SiTailwindcss, SiVercel } from "react-icons/si";

const Skills = ({ skill }) => {
  const icon = {
    // 'C++': <CgCPlusPlus/>,
    Postman: <SiPostman />,
    React: <FaReact />,
    JavaScript: < DiJavascript1 />,
    Java: < DiJava />,
    // Node : <DiNodejs/>,
    // Express : <SiExpress/>,
    // MongoDb : <SiMongodb/>,
    // Git : <FaGitAlt/>,
    Github: <FaGithub />,
    Npm: <FaNpm />,
    Figma: <FaFigma />,
    Bootstrap: <FaBootstrap />,
    Vercel: <SiVercel />,
    Tailwind: <SiTailwindcss />,
    NextJs: <SiNextdotjs />,
    Python: <SiPython />
  }

  const style = {
    skills: {
      fontSize: "16px",
      marginTop: "20px"
    },
    
    skillBox: {
      display: "flex",
      flexDirection: "column",

    }
  }

  return (
    <div title={skill} style={style?.skillBox} className='SkillBox'>
      {icon[skill]}
      <div style={style?.skills}>{skill}</div>
    </div>
  )
}

export default Skills
