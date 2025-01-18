<script lang="ts">

    import {page} from "$app/state";
    import {createService, fetchService, updateService} from "$lib/api";
    import {goto} from "$app/navigation";

    let {data} = $props();


    const id = page.params?.id || null;

    let form = $state({
        name: '',
        description: '',
        price: ''
    });

    if (id) {
        fetchService(id).then((res) => {
            form = res;
        });
    }




    const save = async (event: SubmitEvent) => {
        event.preventDefault();

        if (id)
            await updateService(id, form);
        else {
            await createService(form);
        }

        goto('/admin/')
    }
</script>

<div class="container mx-auto m-5 flex gap-4">
    <form onsubmit={save} class="flex flex-col gap-2">
        <input type="text" bind:value={form.name} placeholder="Название" />
        <input type="text" bind:value={form.description} placeholder="Описание" />
        <input type="text" bind:value={form.price} placeholder="Цена" />


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
