import React from "react";
import { useRecoilValueLoadable } from "recoil";
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
            {getLoadedValue()}
        </div>
    )
};


export default Header;
