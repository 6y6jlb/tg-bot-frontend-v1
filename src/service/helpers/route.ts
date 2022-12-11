export const getHref = (path: string) => {
    const origin = window.location.origin;
    const pathName = window.location.pathname;

    const url = new URL(origin + pathName + '#' + path)


    return url.href;

}