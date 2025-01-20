<script>
    import About from '$lib/images/about.svg';
    import {goto} from "$app/navigation";
    import {fetchBlogs} from "$lib/api";

    let blogs = $state([]);


    fetchBlogs().then(res => {
        blogs = res;
    });
</script>
<div class="container mx-auto mt-8">
    <h2>Статьи</h2>
    {#each blogs as blog}
        <div onclick={() => goto(`/blog/${blog.id}`)} class="mt-2">
            <h3 class="text-left">
                {blog.heading}
            </h3>
            <p class="text-xs">
                {blog.description}
            </p>

            <button class="border-2 border-white p-1">
                Перейти
            </button>
        </div>
    {/each}
</div>
