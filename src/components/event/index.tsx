import React from "react"
import { EVENT_TYPE } from "../../const/event";
import { LANGUAGE } from "../../const/language";
import { useTelegram } from "../../hooks/useTelegram";
import Title from "../title/Title";
import Form from "./Form";
import "./style.css"

const initialState = {
    time: '',
    options: '',
    timezone: 'Europe/Moscow',
    language: LANGUAGE.ENGLISH,
};

export type FormType = typeof initialState;


interface IProps {
    type: EVENT_TYPE
}

const WeatherProfile: React.FC<IProps> = ({ type }) => {
    const { TELEGRAM } = useTelegram();
    const [form, setForm] = React.useState(initialState);
    const optionsTitle = React.useMemo(() => EVENT_TYPE[type].toLowerCase(), [type])

    const submit = React.useCallback(() => {
        TELEGRAM.sendData(JSON.stringify({ ...form }))
    }, [form]);


    React.useEffect(() => {
        TELEGRAM.MainButton.setParams({
            'text': 'Создать ' + optionsTitle
        });
        TELEGRAM.onEvent('mainButtonClicked', submit);
        return () => {
            TELEGRAM.offEvent('mainButtonClicked', submit)
        }
    }, [submit])


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
            TELEGRAM.MainButton.show();
        } else {
            TELEGRAM.MainButton.hide();
        }
    }, [form, TELEGRAM])

    const fieldHandler = (event: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
        const fieildName = event.currentTarget?.name
        const newValue = event.currentTarget?.value;
        setForm((prevState) => ({
            ...prevState,
            [fieildName]: newValue,
        }))
    }


    return (
        <div>
            <Title>Создание записи в рассписании</Title>
            <Form optionsTitle={optionsTitle} formData={form} onChange={fieldHandler} />
        </div>
    )
};


export default WeatherProfile;
