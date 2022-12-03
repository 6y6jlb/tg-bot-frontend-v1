import { FormType as TaskFormType } from "../components/task";
import { FormType as UserProfileFormType } from "../components/profile";

export interface IUserUpdate  extends UserProfileFormType{
    user_id: string
}

export interface ITaskUpdate  extends TaskFormType{
    id: string
}