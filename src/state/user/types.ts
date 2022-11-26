
export interface IUser {
    _id?: string,
    created_at: Date,
    name: string,
    tz?: string,
    location?: string,
    currency?: string,
    language?: string,
    mess_count: number
}

export interface IUserState extends IUser {
    loaded: boolean,
    loading: boolean
}

export interface ITask {
    _id?: string,
    last_call?: Date,
    user_id: string,
    event_type: EVENT_ENUM,
    options: string,
    call_at: Date,
    queue?: boolean,
    tz: string,
    is_regular: boolean
}

export enum EVENT_ENUM {
    WEATHER = 1,
    REMINDER = 2
}