import Header from "./components/header/Header";
import {useTelegram} from "./hooks/useTelegram";
import React from "react";

function App() {
  const { TELEGRAM } = useTelegram();

  React.useEffect(() => {
    TELEGRAM.ready()

  }, [TELEGRAM])


  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
