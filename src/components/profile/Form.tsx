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

type FormType = typeof initialState;

interface IProps { }

const Form: React.FC<IProps> = (props) => {
    const { TELEGRAM } = useTelegram();
    const [form, setForm] = React.useState(initialState);
    const [show, setShow] = React.useState(true)

    const submit = React.useCallback(() => {
        TELEGRAM.sendData(JSON.stringify(form))
    }, [form, TELEGRAM]);


    React.useEffect(() => {
        TELEGRAM.MainButton.setParams({
            'text': 'Отправить информацию'
        });
        TELEGRAM.onEvent('mainButtonClicked', submit);
        return () => {
            TELEGRAM.offEvent('mainButtonClicked', submit)
        }
    }, [TELEGRAM])


    const formValidate = React.useCallback((newForm: FormType): boolean => {
        let isValid = true;
        Object.keys(initialState).forEach(element => {
            // @ts-ignore
            if (!newForm[element]) {
                isValid = false
            }
        })
        return isValid;
    }, []);


    React.useEffect(() => {
        if (formValidate(form)) {
            setShow(true)
            TELEGRAM.MainButton.show();
        } else {
            setShow(false)
            TELEGRAM.MainButton.hide();
        }
    }, [form, TELEGRAM])



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

    const fieldHandler = (event: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
        const fieildName = event.currentTarget?.name
        const newValue = event.currentTarget?.value;
        setForm((prevState) => ({
            ...prevState,
            [fieildName]: newValue,
        }))
    }
    // console.dir(errors?.name)

    return (
        <>
            <form className="form">
                <input name="name" value={form.name} onChange={fieldHandler} className="input" type="text" />
                <select name="language" value={form.language} onChange={fieldHandler} className="select">
                    {languages}
                </select>
                <select name="timezone" value={form.timezone} onChange={fieldHandler} className="select">
                    {timezones}
                </select>
                {show ? 'show' : 'hide'}
            </form >
        </>
    )
};


export default Form;
