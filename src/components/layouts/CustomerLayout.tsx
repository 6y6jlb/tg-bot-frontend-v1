import PropTypes from 'prop-types';
import React, { useEffect } from "react";
import { ReactNotifications, Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { useRecoilState } from "recoil";
import { getNotificationType } from "../../service/helpers/notifications";
import commonNotificationState from "../../state/notification/notification-atom";
import { INotification, NOTIFICATION } from "../../state/notification/types";
import "./style.css";

interface IProps {
  children: PropTypes.ReactNodeLike
}

const CustomerLayout: React.FC<IProps> = (props) => {

  const [notifications, setNotifiations] = useRecoilState(commonNotificationState)
  const [preparedNotifications, setPreparedNotifications] = React.useState<Array<INotification>>([])


  useEffect(() => {
    if (preparedNotifications.length) {
      preparedNotifications.forEach(notification => {
        Store.addNotification({
          title: NOTIFICATION[notification.type],
          message:  notification.message,
          type: getNotificationType(notification.type),                         // 'default', 'success', 'info', 'warning'
          container: 'top-right',                // where to position the notifications
          animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
          animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
          dismiss: {
            duration: 3000
          }
        })
        setNotifiations([...notifications.filter(item => item.created_at !== notification.created_at), { ...notification, showed: true }])
        setPreparedNotifications([...preparedNotifications.filter(item => item.created_at !== notification.created_at)])
      })

    }
  }, [preparedNotifications])

  useEffect(() => {
    if (notifications.length) {
      notifications.forEach(notification => {
        if (!notification.showed) setPreparedNotifications([...preparedNotifications, notification])
      })
    }
  }, [notifications])

  return (
    <div className="customer-wrapper">
      <ReactNotifications />
      {props.children}
    </div>
  )
};


export default CustomerLayout;
