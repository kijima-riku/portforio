import React from "react";
import "../css/Skill.css";
import { AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoReact,
} from "react-icons/bi";
import { FaPhp } from "react-icons/fa";
import { DiMysql } from "react-icons/di";

const Skill = () => {
  return (
    <div className="container_skill">
      <h2 className="skill italic">-SKILL-</h2>
      <div className="skill-list">
        <div className="skill-item">
          <AiFillHtml5 className="icon" />
          <h3 className="skill-name">HTML5</h3>
        </div>
        <div className="skill-item">
          <BiLogoCss3 className="icon" />
          <h3 className="skill-name">CSS3</h3>
        </div>
        <div className="skill-item">
          <BiLogoJavascript className="icon" />
          <h3 className="skill-name">JavaScript</h3>
        </div>
        <div className="skill-item">
          <BiLogoTypescript className="icon" />
          <h3 className="skill-name">TypeScript</h3>
        </div>
        <div className="skill-item">
          <BiLogoReact className="icon" />
          <h3 className="skill-name">React</h3>
        </div>
        <div className="skill-item">
          <FaPhp className="icon" />
          <h3 className="skill-name">PHP</h3>
        </div>
        <div className="skill-item">
          <DiMysql className="icon" />
          <h3 className="skill-name">mySQL</h3>
        </div>
      </div>
    </div>
  );
};

export default Skill;
