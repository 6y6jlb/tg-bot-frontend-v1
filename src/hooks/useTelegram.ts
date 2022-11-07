
const TELEGRAM = window.Telegram?.WebApp


export function useTelegram() {

    const onClose = () => {
        TELEGRAM.close()
    }

    const onToggleButton = () => {
        if(TELEGRAM.MainButton.isVisible) {
            TELEGRAM.MainButton.hide();
        } else {
            TELEGRAM.MainButton.show();
        }
    }

    return {
        onClose,
        onToggleButton,
        TELEGRAM,
        user: TELEGRAM.initDataUnsafe?.user,
        queryId: TELEGRAM.initDataUnsafe?.query_id,
    }
}