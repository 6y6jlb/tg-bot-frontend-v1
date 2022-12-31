import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { LANGUAGE } from "../../const/language";
import { useTelegram } from "../../hooks/useTelegram";
import { updateUser } from "../../service/user";
import commonNotificationState from "../../state/notification/notification-atom";
import { NOTIFICATION } from "../../state/notification/types";
import Title from "../title/Title";
import Form from "./Form";
import "./style.css";

const initialState = {
    name: '',
    tz: 'Europe/Moscow',
    language: LANGUAGE.ENGLISH,
};

export type FormType = typeof initialState;


interface IProps { }

const Profile: React.FC<IProps> = (props) => {
    const { tg, userTg } = useTelegram();
    const [form, setForm] = React.useState(initialState);
    const setNotifiations = useSetRecoilState(commonNotificationState)
    
    const submit = React.useCallback(async () => {

        try {
            const response = await updateUser({ ...form, user_id: userTg?.id })
            setNotifiations((oldState) => [...oldState, { message: 'Пользователь успешно сохранен', type: NOTIFICATION.SUCCESS, showed: false, created_at: new Date() }])
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


    React.useEffect(() => {
        if (formValidate(form)) {
            tg.MainButton.show();
        } else {
            tg.MainButton.hide();
        }
    }, [form, tg])

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
            <Title>Профайл</Title>
            <Form disabled={!formValidate(form)} formData={form} onChange={fieldHandler} submit={submit} />
        </div>
    )
};


export default Profile;
