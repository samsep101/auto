type TOptions = Partial<{
    path: string;
    samesite: 'lax' | 'strict';
    expires: string;
    "max-age": string;
    domain: string;
}>;

function setCookie(key: string, data: string, options: TOptions = {}) {

    let serializedCookieString = encodeURIComponent(key) + '=' + encodeURIComponent(data);

    for (let optionName in options) {
        serializedCookieString += '; ' + optionName + '=' + options[optionName];
    }

    console.log('saving cookies: ', document.cookie = serializedCookieString);
}


export {setCookie}
