import React, { useEffect } from "react"
import Button from "../button/Button";
import "./style.css";
import tz from '../../const/tz.json'
import { LANGUAGE } from '../../const/language'
import { useTelegram } from "../../hooks/useTelegram";


const initialState = {
    name: '',
    timezone: 'Europe/Moscow',
    language: LANGUAGE.ENGLISH,
};

type FormType = typeof initialState

interface IProps { }

const Form: React.FC<IProps> = (props) => {
    const { TELEGRAM } = useTelegram();

    React.useEffect(() => {
        TELEGRAM.MainButton.setParams({
            'text': 'Отправить сообщение'
        })
    }, [])

    const [form, setForm] = React.useState(initialState);

    React.useEffect(() => {
        if (formValidate()) {
            TELEGRAM.MainButton.show();
        } else {
            TELEGRAM.MainButton.hide();
        }
    }, [form, TELEGRAM])



    const formValidate = (): boolean => {
        let valid = false;
        Object.values(form).forEach(el => {
            if (el && el.length) valid = true
            else return false
            return valid;
        })
        return valid;
    };

    const timezones = tz.map((el) => {
        return el.utc.map((zone, index) => {
            const utc = el.text.split(' ')[0];
            return (
                <option key={index + el.abbr} className="option" value={zone}>
                    {utc}&nbsp;{zone}
                </option>
            )
        })

    })

    const languages = Object.values(LANGUAGE).map((el, index) => <option key={el + index} value={el}>{el}</option>);

    const formHandler = (event: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
        const fieildName = event.currentTarget?.name
        const newValue = event.currentTarget?.value;
        setForm((prevState) => ({
            ...prevState,
            [fieildName]: newValue,
        }))
    }

    const submit = (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log(form)
    };
    return (
        <form className="form">
            <input name="name" value={form.name} onChange={formHandler} className="input" type="text" />
            <select name="language" value={form.language} onChange={formHandler} className="select">
                {languages}
            </select>
            <select name="timezone" value={form.timezone} onChange={formHandler} className="select">
                {timezones}
            </select>
            <Button onClick={submit} title="отправить" />
        </form >
    )
};


export default Form;
