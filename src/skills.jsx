import { useState } from "react";

let nextId = 0;

function Skills({setSkill, setSkills, skill, skills}) {

  const handleSkill = (event) => {
    setSkill(event.target.value);
  };

  const addSkill = (event) => {
    event.preventDefault();
    setSkills([...skills, { id: nextId++, name: skill }]);
    setSkill("");
  };

  return (
    <form className="skills">
      <h2>Skills</h2>
      <input
        className="skill"
        placeholder="Language/framework/other techonology"
        type="text"
        value={skill}
        onChange={handleSkill}
      ></input>
      <button onClick={addSkill}>+</button>
      {skills.map((skl) => (
        <li key={skl.id}>{skl.name}</li>
      ))}
    </form>
  );
}

export default Skills;
