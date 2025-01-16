import {fetchReviews} from "$lib/api";


export  const load = async () => {
    return  {
        reviews: await fetchReviews(),
    }
}