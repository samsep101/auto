<script lang="ts" xmlns="http://www.w3.org/1999/html">
    import EditorJS from '@editorjs/editorjs';

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



    //
    // let editor;
    //
    // let action = () => {
    //     editor = new EditorJS({
    //         /**
    //          * Id of Element that should contain Editor instance
    //          */
    //         holder: 'editorjs'
    //     });
    //
    // //     form.description
    // }


    const save = async (event: SubmitEvent) => {
        event.preventDefault();

        // form.description = await editor.save()

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
        <textarea bind:value={form.description} placeholder="Описание"></textarea>

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
        height: auto;
        @apply p-4
    }

    #editorjs {
        background: white;
        color: black;
    }
</style>
