import React from "react";

function App() {
  const [response, setResponse] = React.useState();
  React.useEffect(() => {
    fetch(`http://localhost:${process.env.REACT_APP_SERVER_PORT}`)
      .then(raw => raw.text())
      .then(res => setResponse(res));
  }, []);
  return (
    <div className="App">
      Hello from Westin Client!
      <pre>{response}</pre>
    </div>
  );
}

export default App;
