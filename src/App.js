import React, { useState } from 'react';

function App() {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);

    const yearsDiff = today.getFullYear() - birthDateObj.getFullYear();
    const monthsDiff = today.getMonth() - birthDateObj.getMonth();
    const daysDiff = today.getDate() - birthDateObj.getDate();

    if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
      setAge(yearsDiff - 1);
    } else {
      setAge(yearsDiff);
    }
  };

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <label htmlFor="birthDate">Enter your birth date:</label>
      <input
        type="date"
        id="birthDate"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== '' && <p>You are {age} years old.</p>}
    </div>
  );
}

export default App;
