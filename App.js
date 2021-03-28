import React, { useState } from 'react';
import date from './date';
import List from './List';
//onClick={() => setPeople([])}
function App(){
  const [people, setPeople] = useState(date)
  return (
    <main>
      <section className='container'>
        <h3> {people.length} Birthday Today</h3>
        <List people={people}/>
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  )
}

export default App;
