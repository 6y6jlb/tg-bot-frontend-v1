export enum EVENT_TYPE {
    WEATHER = 1,
    REMINDER = 2
}

export const EventPlaceholders = {
    [EVENT_TYPE.WEATHER]:'Укажите город',
    [EVENT_TYPE.REMINDER]:'Укажите сообщение',
}