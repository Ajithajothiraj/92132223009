import React, { useEffect } from 'react';
import { Log } from './logger';

function App() {
  useEffect(() => {
    Log("frontend", "info", "component", "App component mounted");
  }, []);

  const handleClick = () => {
    Log("frontend", "warn", "component", "User clicked the button");
    alert("Button clicked");
  };

  return (
    <div>
      <h1>Affordmed Logging Middleware Test</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
