function General({ setFirstName, setLastName, setSpecialty, setPhoto, setAbout }) {
  return (
    <form className="general">
      <h2>General info</h2>
      <input id="firstName" placeholder="First name" type="text" onChange={(event) => {setFirstName(event.target.value)}}></input>
      <input id="lastName" placeholder="Last name" type="text" onChange={(event) => {setLastName(event.target.value)}}></input>
      <input id="specialty" placeholder="Specialty" type="text" onChange={(event) => {setSpecialty(event.target.value)}}></input>
      <input id="photo" placeholder="Photo URL" type="url" onChange={(event) => {setPhoto(event.target.value)}}></input>
      <textarea id="about" placeholder="Something about yourself" onChange={(event) => {setAbout(event.target.value)}}></textarea>
    </form>
  );
}

export default General;
