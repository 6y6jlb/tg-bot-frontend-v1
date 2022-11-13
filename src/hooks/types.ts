export { };

declare global {
  interface Window {
    Telegram: {
      WebApp: {
        initData: string,
        initDataUnsafe: any,
        version: string,
        colorScheme: string,
        themeParams: any,
        isExpanded: boolean,
        viewportHeight: number,
        viewportStableHeight: number,
        headerColor: string,
        backgroungColor: string,
        isClosingConfiramationEnabled: boolean,
        BackButton: any,
        MainButton: any,
        HapticFeedback: any,
        isVersionAtLeast: Function,
        disableClosingConfirmation: Function,
        setBackgroundColor: Function,
        enableClosingConfirmation: Function,
        onEvent: Function,
        offEvent: Function,
        sendData: Function,
        openLink: Function,
        openTelegramLink: Function,
        openInvoice: Function,
        showPopup: Function,
        showAlert: Function,
        showConfirm: Function,
        ready: Function,
        expand: Function,
        close: Function,
      };
    };
  }
}