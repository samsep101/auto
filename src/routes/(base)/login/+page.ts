import { dev } from '$app/environment';
import authStore from "$modules/auth/index.svelte.js";
import {beforeNavigate, goto} from '$app/navigation';
import {page} from "$app/state";
import { pushState } from '$app/navigation';
import {redirect} from "@sveltejs/kit";

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export const load = (params) => {
    console.log('is auth ', authStore.isAuthorized());

    if (authStore.isAuthorized()) {
        throw redirect(301, `/admin`)
    }
};
