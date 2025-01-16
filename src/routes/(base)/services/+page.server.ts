import {PUBLIC_BACKEND_URL} from "$env/static/public";
import {fetchServices} from "$lib/api";



export  const load = async () => {
    return {
        services: await fetchServices()
    }
}