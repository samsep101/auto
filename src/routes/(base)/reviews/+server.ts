import {PUBLIC_BACKEND_URL} from "$env/static/public";
import { json } from '@sveltejs/kit';

export async function POST({ request, cookies }) {
    const data = await request.json();

    console.log('data', data);

    const res = await fetch(PUBLIC_BACKEND_URL + '/send-review', {
        method: 'POST',
        body: new URLSearchParams(data)
    })



    return json(true);
}