import React, { SyntheticEvent } from "react";
import { FormType } from ".";
import { LANGUAGE } from '../../const/language';
import tz from '../../const/tz.json';
import Button from "../button/Button";
import "./style.css";


interface IProps {
    formData: FormType,
    disabled: boolean,
    onChange: (event: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => void,
    submit: () => void
}

const Form: React.FC<IProps> = ({ formData, onChange, submit, disabled }) => {


    const timezones = React.useMemo(() => tz.map((el) => {
        return el.utc.map((zone, index) => {
            const utc = el.text.split(' ')[0];
            return (
                <option key={index + el.abbr} className="option" value={zone}>
                    {utc}&nbsp;{zone}
                </option>
            )
        })

    }), [])

    const languages = React.useMemo(() => Object.values(LANGUAGE).map((el, index) => <option key={el + index} value={el}>{el}</option>), []);

    const handleSubmit = React.useCallback((e: SyntheticEvent<HTMLButtonElement>) => {
        e.preventDefault()
        submit()
    }, [submit])

    return (
        <form className="form">
            <input required placeholder="Укажите ваше имя" name="name" value={formData.name} onChange={onChange} className="input" type="text" />
            <select name="language" placeholder="Укажите предпочитаемы язык" value={formData.language} onChange={onChange} className="select">
                {languages}
            </select>
            <select name="timezone" value={formData.tz} onChange={onChange} className="select">
                {timezones}
            </select>
            <Button disabled={disabled} onClick={handleSubmit}>Сохранить изменения</Button>
        </form >
    )
};


export default Form;
