<script>
    import About from '$lib/images/about.svg';

    const {data} = $props();


    let blog = data.blog;
</script>
<div class="container mx-auto mt-5">
    <h3 class="text-center mx-auto">{blog.heading}</h3>
    {@html blog.description}
</div>


