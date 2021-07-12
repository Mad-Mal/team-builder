import './App.css';
import { useState } from 'react';
import Form from './Form';

function App() {

  const team = [
    {name: 'Mallory Hall', email: 'malhall@gmail.com', role: 'Frontend Dev'},
    {name: 'Monica Clouse', email: 'monclouse@gmail.com', role: 'Backend Dev'},
    {name: 'Mychal Hall', email: 'mychall@gmail.com', role: 'Fullstack Dev'}
  ]

  const [teamList, setTeamList] = useState(team);

  function submit() {

    const nameInput = document.getElementById('nameInput')
    const emailInput = document.getElementById('emailInput')
    const roleSelect = document.getElementById('roleSelect')
    
    const newTeamMember = {
      name: nameInput.value,
      email: emailInput.value,
      role: roleSelect.value
    }
    
    setTeamList([...teamList, newTeamMember])

    console.log(team)

    nameInput.value = ''
    emailInput.value = ''
    roleSelect.value = ''
  }

  return (
    <div className="App">
      <header className="App-header">
      <Form></Form>
      <button id='addButton' onClick={submit}>Add Member</button>
      </header>
      <div className="innerCont">
        {team.map((member) => {
          return <span className='memberSpans'>Name: {member.name} Email: {member.email} Role: {member.role}</span>
        })}
      </div>
    </div>
  );
}

export default App;
