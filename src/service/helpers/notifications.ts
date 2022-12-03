import { NOTIFICATION_TYPE } from 'react-notifications-component';
import { NOTIFICATION } from "../../state/notification/types";

// 'default', 'success', 'info', 'warning'
export const getNotificationType = (type: NOTIFICATION):NOTIFICATION_TYPE => {
    switch (type) {
        case NOTIFICATION.ERROR:

            return 'danger';

        case NOTIFICATION.SUCCESS:

            return 'success';

        default:
            return 'info';;
    }
}