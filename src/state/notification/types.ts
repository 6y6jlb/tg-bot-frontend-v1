
export interface INotification {
    message: string,
    type: NOTIFICATION
    showed: boolean,
    created_at: Date

}

export enum NOTIFICATION {
    ERROR = 1,
    SUCCESS = 2
}
