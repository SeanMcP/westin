import React from "react";
import { getServer } from "./getHost";

function App() {
  const [response, setResponse] = React.useState();
  React.useEffect(() => {
    fetch(getServer())
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
