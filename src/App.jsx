import "./App.css";
import General from "./general_info.jsx";
import Education from "./education_info.jsx";
import Contacts from "./contacts.jsx";
import WorkExperience from "./work_experience.jsx";
import Skills from "./skills.jsx";
import CV from "./main_cv.jsx";
import { useState } from "react";

function App() {
  // general info
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [photo, setPhoto] = useState("");
  const [about, setAbout] = useState("");

  // education info
  const [courses, setCourses] = useState("");
  const [uni, setUni] = useState("");
  const [degree, setDegree] = useState("");

  // Skills info
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);

  // Contacts info
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [github, setGithub] = useState("");
  const [portfolio, setPortfolio] = useState("");

  // Workplaces
  const [workplaces, setWorkplaces] = useState([]);
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [duration, setDuration] = useState("");
  const [aboutWork, setAboutwork] = useState("");

  let nextIdWork = 0;
  const addWorkplace = (event) => {
    event.preventDefault();
    setWorkplaces([
      ...workplaces,
      { id: nextIdWork++, pos: position, comp: company, dur: duration, abt: aboutWork },
    ]);
    setPosition("");
    setCompany("");
    setDuration("");
    setAbout("");
  };

  return (
    <>
      <h1>CV_baker</h1>
      <General
        setFirstName={setFirstName}
        setLastName={setLastName}
        setSpecialty={setSpecialty}
        setPhoto={setPhoto}
        setAbout={setAbout}
      />
      <Education
        setCourses={setCourses}
        setUni={setUni}
        setDegree={setDegree}
      />
      <Contacts
        setEmail={setEmail}
        setTel={setTel}
        setGithub={setGithub}
        setPortfolio={setPortfolio}
      />
      <Skills
        setSkill={setSkill}
        setSkills={setSkills}
        skill={skill}
        skills={skills}
      />
      <WorkExperience
        setPosition={setPosition}
        setCompany={setCompany}
        setDuration={setDuration}
        setAbout={setAboutwork}
        addWorkplace={addWorkplace}
        workplaces={workplaces}
      />
      <CV
        fname={firstName}
        lname={lastName}
        spec={specialty}
        photo={photo}
        about={about}
        courses={courses}
        uni={uni}
        degree={degree}
        skills={skills}
        email={email}
        tel={tel}
        github={github}
        portfolio={portfolio}
        workplaces={workplaces}
      />
    </>
  );
}

export default App;
