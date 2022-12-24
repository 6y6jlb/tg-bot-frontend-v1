import React from "react";
import { useRecoilValueLoadable } from "recoil";
import { PUBLIC_ROUTES } from "../../const/routes";
import { useTelegram } from "../../hooks/useTelegram";
import { getHref } from "../../service/helpers/route";
import userState from "../../state/user/auth-user-atom";
import "./style.css";

interface IProps { }

const Header: React.FC<IProps> = (props) => {
    const user = useRecoilValueLoadable(userState);
    const { TELEGRAM, userId, } = useTelegram();

    const getLoadedValue = React.useCallback(() => {
        switch (user.state) {
            case 'hasValue':
                return <h5 className="title">Добро пожаловать: {user.contents.name || userId}</h5>;
            case 'loading':
                return <div>Loading...</div>;
            case 'hasError':
                throw user.contents;
        }
    }, [user])

    return (
        <div className="wrapper">

                <nav className="nav-wrapper">
                {
                    PUBLIC_ROUTES.map(route => {
                        return (
                            <a className="nav-item" key={route.path}
                                href={getHref(route.path)}
                            >
                                {route.navTitle}
                            </a>
                        )

                    })
                }
                </nav>

            {getLoadedValue()}
        </div>
    )
};


export default Header;
