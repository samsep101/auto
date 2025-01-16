import {PUBLIC_BACKEND_URL} from "$env/static/public";



export const fetchServices = async () => {
    const res = await fetch(PUBLIC_BACKEND_URL + '/services');

    console.log(res)


    return res.json()
}

export const fetchReviews = async () => {
    const res = await fetch(PUBLIC_BACKEND_URL + '/reviews');


    return res.json()
}



export const fetchOrders = async () => {
    const res = await fetch(PUBLIC_BACKEND_URL + '/orders');


    return res.json()
}
export const fetchQuestions = async () => {
    const res = await fetch(PUBLIC_BACKEND_URL + '/questions');


    return res.json()
}