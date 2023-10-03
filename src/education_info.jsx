import { useState } from "react"

function Education({setCourses, setUni, setDegree}) {
  const [isSelftaught, setIsSelftaught] = useState(false);

  const handleSelftought = (event) => {
    setIsSelftaught(event.target.checked);
  };

  return (
    <form className="education">
      <h2>Education</h2>
      <input
        placeholder="Courses"
        type="text"
        style={{ display: isSelftaught ? "unset" : "none" }}
        onChange={(event) => {setCourses(event.target.value)}}
      ></input>
      <input
        placeholder="Place of study"
        type="text"
        value={isSelftaught ? "" : undefined}
        style={{ display: isSelftaught ? "none" : "unset" }}
        onChange={(event) => {setUni(event.target.value)}}
      ></input>
      <input
        placeholder="Degree"
        type="text"
        value={isSelftaught ? "" : undefined}
        style={{ display: isSelftaught ? "none" : "unset" }}
        onChange={(event) => {setDegree(event.target.value)}}
      ></input>
      <div>
        <input
          type="checkbox"
          value={isSelftaught}
          onChange={handleSelftought}
        ></input>
        <label>Selftaught</label>
      </div>
    </form>
  );
}

export default Education
