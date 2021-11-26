import React from 'react';
import './App.css';
import DemoApp from './DemoApp';

function App() {
  const calendarRef = React.createRef();

  const someMethod = () => {
    let calendarApi = calendarRef.current.getApi()
    console.log('📅', calendarApi);
  }

  return (
    <div className="App">
      <h1>Hello 🍼 Baby</h1>
      <section style={{
        margin: "2.5rem 15%",
      }}>
        <DemoApp calendarRef={calendarRef} />
      </section>
      <button
        style={{
          marginBottom: '1.25rem'
        }}
        onClick={someMethod}
      >Click Me!</button>
    </div>
  );
}

export default App;
