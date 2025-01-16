import {fetchServices, fetchReviews, fetchQuestions, fetchOrders} from "$lib/api";



export  const load = async () => {



    return  {
        reviews: await fetchReviews(),
        services: await fetchServices(),
        questions: await fetchQuestions(),
        orders: await fetchOrders(),
    }
}