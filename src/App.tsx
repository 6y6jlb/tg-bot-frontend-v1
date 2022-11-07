import Header from "./components/header/Header";
import { useTelegram } from "./hooks/useTelegram";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Weather from "./components/weather";
import Event from "./components/event";
import Profile from "./components/profile";

function App() {
  const { TELEGRAM } = useTelegram();

  React.useEffect(() => {
    TELEGRAM.ready()

  }, [TELEGRAM])


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Weather />} />
        <Route path="event-reminder" element={<Event type="reminder" />} />
        <Route path="event-weather" element={<Event type="weather" />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
