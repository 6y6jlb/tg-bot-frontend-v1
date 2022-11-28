import React from "react"
import "./style.css"
import { LANGUAGE } from '../../const/language';
import tz from '../../const/tz.json';
import { FormType } from ".";
import { EventPlaceholders, EVENT_TYPE } from "../../const/event";



interface IProps {
    formData: FormType,
    optionsType: EVENT_TYPE
    onChange: (event: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => void
}

const Form: React.FC<IProps> = ({formData, onChange, optionsType}) => {

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

    const optionsPlaceholder = React.useMemo(()=>EventPlaceholders[optionsType],[optionsType])


    return (
        <>
            <form className="form">
                <input placeholder="Укажите время для вызова события" name="time" value={formData.time} onChange={onChange} className="input" type="text" />
                <input placeholder={optionsPlaceholder} name="options" value={formData.options} onChange={onChange} className="input" type="text" />
                <select name="language" value={formData.language} onChange={onChange} className="select">
                    {languages}
                </select>
                <select name="timezone" value={formData.tz} onChange={onChange} className="select">
                    {timezones}
                </select>
            </form >
        </>
    )
};


export default Form;
