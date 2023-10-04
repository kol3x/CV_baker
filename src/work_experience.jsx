function WorkExperience({
  setPosition,
  setCompany,
  setDuration,
  setAbout,
  addWorkplace,
  workplaces,
}) {
  return (
    <form className="work">
      <h2>Work experience</h2>
      <input
        id="position"
        placeholder="Position"
        type="text"
        onChange={(event) => setPosition(event.target.value)}
      ></input>
      <input
        id="company"
        placeholder="Company"
        type="text"
        onChange={(event) => setCompany(event.target.value)}
      ></input>
      <input
        id="duration"
        placeholder="Duration"
        type="text"
        onChange={(event) => setDuration(event.target.value)}
      ></input>
      <textarea
        id="about"
        placeholder="Your main occupation, daily tasks and work field"
        onChange={(event) => setAbout(event.target.value)}
      ></textarea>
      {workplaces.map((wp) => (
        <div>
          <li>{wp.pos}</li>
        </div>
      ))}
      <button onClick={addWorkplace}>+</button>
    </form>
  );
}

export default WorkExperience;
