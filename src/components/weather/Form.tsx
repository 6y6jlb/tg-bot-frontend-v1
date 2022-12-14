import React, { SyntheticEvent } from "react"
import "./style.css"
import { LANGUAGE } from '../../const/language';
import tz from '../../const/tz.json';
import { FormType } from ".";
import Button from "../button/Button";



interface IProps {
    formData: FormType,
    onChange: (event: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => void,
    disabled: boolean,
    submit: () => void,
}

const Form: React.FC<IProps> = ({formData, onChange, disabled, submit}) => {

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
        <>
            <form className="form">
                <input placeholder="Укажите город" name="city" value={formData.city} onChange={onChange} className="input" type="text" />
                <select name="Укажите предпочитаемый язык" value={formData.language} onChange={onChange} className="select">
                    {languages}
                </select>
                <select name="Укажите таймзону" value={formData.tz} onChange={onChange} className="select">
                    {timezones}
                </select>
                <Button disabled={disabled} onClick={handleSubmit}>Заказать погоду</Button>
            </form >
        </>
    )
};


export default Form;
