import React from "react"
import {useTelegram} from "../../hooks/useTelegram";
import Button from "../button/Button";

interface IProps { }

const Header: React.FC<IProps> = (props) => {
    const { TELEGRAM ,onClose,onToggleButton} = useTelegram();
    React.useEffect(() => {
        TELEGRAM.ready()
    
      }, [TELEGRAM])
    return (
        <div>
            <Button onClick={onClose} title="close" />
            <Button onClick={onToggleButton} title="toggle main" />
            <span>Добро пожаловать: {TELEGRAM.initDataUnsafe?.user?.username}</span>
        </div>
    )
};


export default Header;
