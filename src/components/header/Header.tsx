import React from "react"
import {useTelegram} from "../../hooks/useTelegram";
import Button from "../button/Button";
import "./style.css"

interface IProps { }

const Header: React.FC<IProps> = (props) => {
    const { TELEGRAM ,onClose,onToggleButton} = useTelegram();
    React.useEffect(() => {
        TELEGRAM.ready()
    
      }, [TELEGRAM])
    return (
        <div className="wrapper">
            {/* <Button onClick={onClose} title="close" />
            <Button onClick={onToggleButton} title="toggle main" /> */}
            <h5 className="title">Добро пожаловать: {TELEGRAM.initDataUnsafe?.user?.username}</h5>
        </div>
    )
};


export default Header;
