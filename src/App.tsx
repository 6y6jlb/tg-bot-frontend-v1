import React from "react";
import { useSetRecoilState } from "recoil";
import AppRouter from "./components/app-router";
import Header from "./components/header/Header";
import CustomerLayout from "./components/layouts/CustomerLayout";
import { useTelegram } from "./hooks/useTelegram";
import { getUser } from "./service/user";
import { userState } from "./state/user/auth-user-atom";


function App() {
  const { tg, userTg } = useTelegram();
  const setUser = useSetRecoilState(userState)

  React.useEffect(() => {
    tg.ready()
  }, [])

  React.useEffect(() => {
    if (userTg?.id) {
      (async function () {
        const user = await getUser(userTg.id)
        setUser(user)
      })()
    }

  }, [userTg])


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
