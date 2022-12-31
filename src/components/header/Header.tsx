import React, { useMemo } from "react";
import { useRecoilValueLoadable } from "recoil";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "../../const/routes";
import { getHref } from "../../service/helpers/route";
import { userState } from "../../state/user/auth-user-atom";
import "./style.css";

interface IProps { }

const Header: React.FC<IProps> = (props) => {
    const authUser = useRecoilValueLoadable(userState);
    const isAuth = useMemo(() => authUser.contents.loaded && authUser.contents.name, [authUser])

    const getLoadedValue = React.useCallback(() => {
        switch (authUser.state) {
            case 'hasValue':
                return <h5 className="title">Добро пожаловать: {authUser.contents.name ?? 'путник'}</h5>;
            case 'loading':
                return <div>Loading...</div>;
            case 'hasError':
                throw authUser.contents;
        }
    }, [authUser])

    const getRoutes = React.useCallback(() => {
        if (isAuth) {
            return PRIVATE_ROUTES
        } else {
            return PUBLIC_ROUTES
        }
    }, [isAuth])

    return (
        <div className="wrapper">

            <nav className="nav-wrapper">
                {
                    getRoutes().map(route => {
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
