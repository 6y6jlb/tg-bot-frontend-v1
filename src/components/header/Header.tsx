import React from "react";
import { NavLink } from "react-router-dom";
import { useRecoilValueLoadable } from "recoil";
import { PUBLIC_ROUTER, PUBLIC_ROUTES } from "../../const/routes";
import userState from "../../state/user/auth-user-atom";
import "./style.css";

interface IProps { }

const Header: React.FC<IProps> = (props) => {
    const user = useRecoilValueLoadable(userState);

    const getLoadedValue = React.useCallback(() => {
        switch (user.state) {
            case 'hasValue':
                return <h5 className="title">Добро пожаловать: {user.contents.name}</h5>;
            case 'loading':
                return <div>Loading...</div>;
            case 'hasError':
                throw user.contents;
        }
    }, [user])

    return (
        <div className="wrapper">
            <nav>

                {
                    PUBLIC_ROUTES.map(route => {
                        return (
                            <a key={route.path}
                                href={route.path}
                            >
                                {route.path}
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
