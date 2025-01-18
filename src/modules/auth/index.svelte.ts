import { PUBLIC_BACKEND_URL as backendUrl} from "$env/static/public";
import {getAuthToken} from "$modules/auth/api";
import {setCookie} from "$modules/auth/utils";
import { getContext, hasContext, setContext } from "svelte";



type TAuth = {
    token: string;
};


let store = $state<null | TAuth>(null);



const isAuthorized = (): boolean =>{

    return store !== null;
}

function encode(data: any): string {
    return JSON.stringify(data)
}

function decode(data: string) {
    return JSON.parse(data);
}


const saveState = () => {


    setCookie('session', isAuthorized() ? encode( store!.token ) : '', {
        samesite: 'strict'
    });
}




const doLogin = async (data: {email: string; password: string}) => {
    const token = await getAuthToken(data)


    // todo убрать это
    if (token)
        load(token.token);

    saveState();
};


const doLogout = () => {
    store = null;

    saveState();
}





const load = (jwt: string) => {
    console.log(jwt, Boolean(jwt))
    if (!Boolean(jwt))
        return false;


    store = {
        token: jwt,
    };

    return true;
}

const user = $derived(() => {
    return isAuthorized() ? '123' : null;
})


// todo убрать отсюда регистрацию и юзера, заменить логин - на getAuth
export default {
    user: () => user,
    token: () => store?.token,
    load,
    doLogout,
    isAuthorized: isAuthorized,
    doLogin,
}


