import {fetchBlog} from "$lib/api";


export async function load({params}) {


    return {
        blog: await fetchBlog(params.id)
    }
}
