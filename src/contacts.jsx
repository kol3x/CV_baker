function Contacts({setEmail, setTel, setGithub, setPortfolio}) {
  return (
    <form className="contacts">
      <h2>Social</h2>
      <input placeholder="Email" type="text" onChange={(event) => {setEmail(event.target.value)}}></input>
      <input placeholder="Telephone number" type="text" onChange={(event) => {setTel(event.target.value)}}></input>
      <input placeholder="Github" type="text" onChange={(event) => {setGithub(event.target.value)}}></input>
      <input placeholder="Portfolio URL" type="url" onChange={(event) => {setPortfolio(event.target.value)}}></input>
    </form>
  );
}

export default Contacts