<script lang="ts">

    import {page} from "$app/state";
    import {createBlog, createService, fetchBlog, fetchService, updateBlog, updateService} from "$lib/api";
    import {goto} from "$app/navigation";

    let {data} = $props();


    const id = page.params?.id || null;

    let form = $state({
        heading: '',
        description: '',
    });

    if (id) {
        fetchBlog(id).then((res) => {
            form = res;
        });
    }




    const save = async (event: SubmitEvent) => {
        event.preventDefault();

        if (id)
            await updateBlog(id, form);
        else {
            await createBlog(form);
        }

        goto('/admin/')
    }
</script>

<div class="container mx-auto m-5 flex gap-4">
    <form onsubmit={save} class="flex flex-col gap-2">
        <input type="text" bind:value={form.heading} placeholder="Название" />
        <input type="text" bind:value={form.description} placeholder="Описание" />


        <button type="submit">
            Отправить
        </button>
    </form>
</div>
<style>
    input {
        color: black;
        @apply p-1 rounded;
    }

    button {
        border: 1px solid;
        @apply p-1 mx-auto rounded
    }

    form {
        max-width: 600px;
        @apply p-4
    }
</style>
