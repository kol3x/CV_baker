function CV({
  fname,
  lname,
  spec,
  photo,
  about,
  courses,
  uni,
  degree,
  skills,
  email,
  tel,
  github,
  portfolio,
  workplaces,
}) {
  let education;
  let workplaces_filtered = "";

  if (courses !== "") {
    education = (
      <h2>
        {fname} has grown as a Software Engineer in a non-traditional way,
        educating himself online, taken {courses}
      </h2>
    );
  } else if (uni !== "") {
    education = (
      <h2>
        {fname}'s alma mater is {uni} with a degree in {degree}.{" "}
      </h2>
    );
  } else {
    education = "";
  }

  if (workplaces.length !== 0) {
    workplaces_filtered = workplaces.map((wp) => (
      <div className="cv_workplaces">
        <h3>Has following work experience:</h3>
        <div className="singleWorkplace">
          {wp.dur} years in {wp.comp} as a {wp.pos}. {wp.abt}.
        </div>
      </div>
    ));
  }

  return (
    <div className="cv">
      <div className="inner_cv">
        <h2 className="cv_name">{fname + " " + lname}</h2>
        <h3 className="cv_spec">A professional {spec}</h3>
        <img src={photo}></img>
        <div className="cv_about">
          A little about {fname}: <br></br>
          <div>{about}</div>
        </div>
        <div className="cv_education">{education}</div>
        <h3 className="cv_skills">
          {fname} is condifent in his skills with following: <br></br>
          <div className="skillsButtons">
            {skills.map((skl) => (
              <button disabled className="skillsButton" key={skl.id}>
                {skl.name}
              </button>
            ))}
          </div>
        </h3>
        <div className="cv_contacts">
          <h2>Contacts</h2>
          <div className="cv_contacts_inside">
            <li>{tel}</li>
            <li>{email}</li>
            <a href={github}>Github</a>
            <a href={portfolio}>Portfolio</a>
          </div>
        </div>
        {workplaces_filtered}
      </div>
    </div>
  );
}

export default CV;
