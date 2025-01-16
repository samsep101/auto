import authStore  from '$modules/auth/index.svelte';

export async function load({cookies}) {
    console.log('DEBUG PRINT: load auth session', cookies.get('session'))
    authStore.load(cookies.get('session'));
}
