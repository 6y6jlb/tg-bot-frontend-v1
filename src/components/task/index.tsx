import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { EVENT_TYPE } from "../../const/event";
import { LANGUAGE } from "../../const/language";
import { createTask } from "../../service/task";
import commonNotificationState from "../../state/notification/notification-atom";
import { NOTIFICATION } from "../../state/notification/types";
import Title from "../title/Title";
import Form from "./Form";
import "./style.css";

const initialState = {
    time: '',
    options: '',
    tz: 'Europe/Moscow',
    language: LANGUAGE.ENGLISH,
};

export type FormType = typeof initialState;


interface IProps {
    type: EVENT_TYPE
}

const Task: React.FC<IProps> = ({ type }) => {
    const [form, setForm] = React.useState(initialState);
    const setNotifiations = useSetRecoilState(commonNotificationState)

    const submit = React.useCallback(async () => {

        try {
            const response = await createTask(form)
            setNotifiations((oldState) => [...oldState, { message: 'Задача успешно сохранена', type: NOTIFICATION.SUCCESS, showed: false, created_at: new Date() }])
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


    return (
        <div>
            <Title>Создание записи в рассписании на событие {EVENT_TYPE[type].toLowerCase()}</Title>
            <Form disabled={!formValidate(form)} optionsType={type} formData={form} onChange={fieldHandler} submit={submit} />
        </div>
    )
};


export default Task;
