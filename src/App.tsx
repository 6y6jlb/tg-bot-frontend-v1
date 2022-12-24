import React from "react";
import { useRecoilState } from "recoil";
import AppRouter from "./components/app-router";
import Header from "./components/header/Header";
import CustomerLayout from "./components/layouts/CustomerLayout";
import { useTelegram } from "./hooks/useTelegram";
import { getUser } from "./service/user";
import userState from "./state/user/auth-user-atom";


function App() {
  const { TELEGRAM, userId } = useTelegram();
  const [user, setUser] = useRecoilState(userState)

  React.useEffect(() => {
    TELEGRAM.ready()
    if (userId) {
      (async function () {
        const user = await getUser(userId)
        setUser(user)
      })()
    }

  }, [TELEGRAM, userId, setUser])


  return (
    <div className="App">
      <Header />
      <CustomerLayout>
        <AppRouter />
      </CustomerLayout>
    </div>
  );
}

export default App;
