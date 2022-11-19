import Header from "./components/header/Header";
import { useTelegram } from "./hooks/useTelegram";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Weather from "./components/weather";
import Event from "./components/event";
import Profile from "./components/profile";
import CustomerLayout from "./components/layouts/CustomerLayout";
import { EVENT_TYPE } from "./const/event";

function App() {
  const { TELEGRAM } = useTelegram();

  React.useEffect(() => {
    TELEGRAM.ready()

  }, [TELEGRAM])


  return (
    <div className="App">
      <Header />
      <CustomerLayout>
        <Routes>
          <Route index element={<Weather />} />
          <Route path="event-reminder" element={<Event type={EVENT_TYPE.REMINDER} />} />
          <Route path="event-weather" element={<Event type={EVENT_TYPE.WEATHER} />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </CustomerLayout>
    </div>
  );
}

export default App;
