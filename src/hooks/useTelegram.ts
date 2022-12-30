const tg = window.Telegram.WebApp;

export function useTelegram() {
console.dir(tg)
    const onClose = () => {
        tg.close()
    }

    const onToggleButton = () => {
        if(tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }

    return {
        onClose,
        onToggleButton,
        tg,
        userTg: tg.initDataUnsafe?.user,
        queryId: tg.initDataUnsafe?.query_id,
    }
}