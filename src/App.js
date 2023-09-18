import logo from './logo.svg';
import './App.css';
import React, {useState} from "react"

function App() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([])

  const removeItem = (id)=> {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email){
      const person = {id: new Date().getTime().toString(), firstName, email};
      setPeople((people) => {
        return [...people, person];
      })
      setFirstName('');
      setEmail('');
    } else {
      console.log('email values')
    }
  }
  return (
    <div className="App">
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor='firstName'>Name: </label>
            <input 
               type="text"
               id='firstName'
               name='firstName'
               value={firstName}
               onChange={(e) => setFirstName(e.target.value)}
               />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email: </label>
            <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <button type="submit">add person</button>
        </form>
        {people.map((person, index) => {
          const {id, firstName, email } = person;
          return (
            <div className='item' key={id}>
            <h4>{firstName}</h4>
            <p>{email}</p>
            <button className="btn" onClick={() => removeItem(id)}>remove</button>
            </div>
          )
        })}
      </article>
    </div>
  );
}

export default App;
