import authStore  from '$modules/auth/index.svelte';

export async function load({cookies}) {
    console.log('DEBUG PRINT: load auth session', cookies.get('session'))

    const session = cookies.get('session');

    if (session)
        authStore.load(session);


    console.log(authStore.isAuthorized())
}
