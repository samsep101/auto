import {PUBLIC_BACKEND_URL} from "$env/static/public";










export async function deleteBlog(id: string) {
    const res = await fetch(PUBLIC_BACKEND_URL + '/blog/' + id, {
        method: 'DELETE',
    });


    return res.json()
}

export const fetchBlog = async (id: string) => {
    const res = await fetch(PUBLIC_BACKEND_URL + '/blog/'+ id);



    return res.json()
}


export async function updateBlog(id: string, data: any) {
    const res = await fetch(PUBLIC_BACKEND_URL + '/blog/' + id, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json'
        }
    });


    return res.json()
}

export async function createBlog(data: any) {
    const res = await fetch(PUBLIC_BACKEND_URL + '/blog', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json'
        }
    });

    return res.json()
}

export const fetchBlogs = async () => {
    const res = await fetch(PUBLIC_BACKEND_URL + '/blog');

    return res.json()
}


export async function deleteService(id: string) {
    const res = await fetch(PUBLIC_BACKEND_URL + '/service/' + id, {
        method: 'DELETE',
    });


    return res.json()
}

export const fetchService = async (id: string) => {
    const res = await fetch(PUBLIC_BACKEND_URL + '/service/'+ id);



    return res.json()
}


export async function updateService(id: string, data: any) {
    const res = await fetch(PUBLIC_BACKEND_URL + '/service/' + id, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json'
        }
    });


    return res.json()
}

export async function createService(data: any) {
    const res = await fetch(PUBLIC_BACKEND_URL + '/service', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json'
        }
    });


    return res.json()
}

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
