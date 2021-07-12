import logo from './logo.svg';
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

  return (
    <div className="App">
      <header className="App-header">
      <Form></Form>
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
