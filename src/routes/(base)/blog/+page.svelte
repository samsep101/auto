<script>
    import About from '$lib/images/about.svg';
    import {goto} from "$app/navigation";
    import {fetchBlogs} from "$lib/api";

    let blogs = $state([]);


    fetchBlogs().then(res => {
        blogs = res;
    })
</script>
<div class="container mx-auto">
    {#each blogs as blog}
        <div onclick={() => goto(`/blog/${blog.id}`)}>
            {blog.heading}
        </div>
    {/each}
</div>
