import React from "react";
import { useRecoilState } from "recoil";
import { LANGUAGE } from "../../const/language";
import { useTelegram } from "../../hooks/useTelegram";
import { getWeather } from "../../service/weather";
import commonNotificationState from "../../state/notification/notification-atom";
import { NOTIFICATION } from "../../state/notification/types";
import { TEMPERATURE_SIGN } from "../../state/weather/types";
import weatherState from "../../state/weather/weather-atom";
import Title from "../title/Title";
import Form from "./Form";
import List from "./List";
import "./style.css";

const initialState = {
    city: '',
    tz: 'Europe/Moscow',
    language: LANGUAGE.ENGLISH,
};

export type FormType = typeof initialState;


interface IProps { }

const Weather: React.FC<IProps> = (props) => {
    const { TELEGRAM } = useTelegram();
    const [form, setForm] = React.useState(initialState);
    const [notifications, setNotifiations] = useRecoilState(commonNotificationState)
    const [weather, setWeather] = useRecoilState(weatherState)

    const submit = React.useCallback(async () => {

        try {
            const weather = await getWeather(form)
            setWeather((oldState) => [...oldState, weather])
            setNotifiations((oldState) => [...oldState, { message: 'Запрос погоды выполнен', type: NOTIFICATION.SUCCESS, showed: false, created_at: new Date() }])
        } catch (error: any) {
            setNotifiations((oldState) => [...oldState, { message: error.message, type: NOTIFICATION.ERROR, showed: false, created_at: new Date() }])
        }

    }, [form]);

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



    const fieldHandler = (event: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
        const fieildName = event.currentTarget?.name
        const newValue = event.currentTarget?.value;
        setForm((prevState) => ({
            ...prevState,
            [fieildName]: newValue,
        }))
    }

    const weatherItems = React.useMemo(() => weather.map(item => {
        const sign = TEMPERATURE_SIGN[item.units];
        return (
            <div key={String(item.dt)} className="list-item">
                <p> Место: {item.name} </p>
                <p> Температура: {String(item.main.temp)} {sign}</p>
                <p> Ощущается как: {String(item.main.feels_like)} {sign}</p>
                <p> Влажность: {String(item.main.humidity)} </p>
            </div>
        )
    }), [weather]);


    return (
        <div>
            <Title>Запрос погоды</Title>
            <Form disabled={!formValidate(form)} submit={submit} formData={form} onChange={fieldHandler} />
            <List hide={!weather.length} title="Прогнозы">
                {weatherItems}
            </List>
        </div>
    )
};


export default Weather;
