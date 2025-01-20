<script lang="ts">


    import {goto} from "$app/navigation";
    import {fetchServices, deleteService, deleteBlog, fetchBlogs} from "$lib/api";

    let {data} = $props();

    let questions = data.questions;
    let orders = data.orders;


    let blogs = $state(data.blogs);

    let services = $state(data.services);


    const onDelete = async (id: string) => {
        await deleteService(id);

        services = await fetchServices();
        // goto(`/admin/service/${id}`)
    }

    const onDeleteBlog = async (id: string) => {
        await deleteBlog(id);

        blogs = await fetchBlogs();
        // goto(`/admin/service/${id}`)
    }



</script>


<div class="container mx-auto m-5 flex gap-4">
    <div class="content flex-1">
        <section class="mb-5">
            <h3 class="mb-3">
                Добавить услуги
            </h3>

            <table class="table-auto w-full mb-3">
                <thead class="bg-blue-900">
                <tr class="p-2">
                    <td class=" p-2 text-center">
                        Название
                    </td>
                    <td class="p-2 text-center">
                        Краткое описание
                    </td>
                    <td class="p-2 text-center">
                        Цена
                    </td>
                </tr>
                </thead>
                <tbody>

                {#each services as service}
                    <tr class="bg-white text-black even:bg-gray-50">
                        <td class="p-2 text-center border-b-2 border-b-gray-200">
                            {service.name}
                        </td>
                        <td class="p-2 text-center border-b-2 border-b-gray-200">
                            {service.description}
                        </td>
                        <td class="p-2 text-center border-b-2 border-b-gray-200">
                            {service.price}
                        </td>
                        <td class="bg-black  w-[20%] text-center">
                            <div class="flex  flex-row justify-around">
                                <button onclick={() => goto(`/admin/service/${service.id}`)} class="text-white bg-blue-400 p-1">
                                    Редактировать
                                </button>
                                <button onclick={onDelete(service.id)} class="text-white bg-blue-400 p-1">
                                    Удалить
                                </button>
                            </div>
                        </td>
                    </tr>
                {/each}
                </tbody>

            </table>
            <button onclick={() => goto(`/admin/service/`)} class="text-white bg-blue-400 p-1">
                Добавить
            </button>
        </section>
        <section class="mb-5">
            <h3 class="mb-3">
                Просмотр записей
            </h3>

            <table class="table-auto w-full">
                <thead class="bg-blue-900">
                <tr class="p-2">
                    <td class="p-2 text-center">
                        Имя
                    </td>
                    <td class="p-2 text-center">
                        Номер телефона
                    </td>
                    <td class="p-2 text-center">
                        Описание проблемы
                    </td>
                </tr>
                </thead>
                <tbody>

                {#each orders as service}
                    <tr class="bg-white text-black even:bg-gray-50 border-b-2 border-b-gray-200">
                        <td class="p-2 text-center">
                            {service.name}
                        </td>
                        <td class="p-2 text-center">
                            {service.phone}
                        </td>
                        <td class="p-2 text-center">
                            {service.description}
                        </td>
                    </tr>
                {/each}
                </tbody>

            </table>
        </section>
        <section class="mb-5">
            <h3 class="mb-3">
                Просмотреть вопросы
            </h3>
            <table class="table-auto w-full">
                <thead class="bg-blue-900">
                <tr class="p-2">
                    <td class=" p-2 text-center">
                        Имя
                    </td>
                    <td class="p-2 text-center">
                        Электронная почта
                    </td>
                    <td class="p-2 text-center">
                        Вопрос
                    </td>
                </tr>
                </thead>
                <tbody>

                {#each questions as service}
                    <tr class="bg-white text-black even:bg-gray-50 border-b-2 border-b-gray-200">
                        <td class="p-2 text-center">
                            {service.name}
                        </td>
                        <td class="p-2 text-center">
                            {service.email}
                        </td>
                        <td class="p-2 text-center">
                            {service.questions}
                        </td>
                    </tr>
                {/each}
                </tbody>

            </table>
        </section>

        <section>
            <h3 class="mb-3">
                Просмотр блогов
            </h3>

            <table class="table-auto w-full mb-3">
                <thead class="bg-blue-900">
                <tr class="p-2">
                    <td class="p-2 text-center">
                        Название
                    </td>
                    <td class="p-2 text-center">
                        Описание
                    </td>
                </tr>
                </thead>
                <tbody>

                {#each blogs as service}
                    <tr class="bg-white text-black even:bg-gray-50 ">
                        <td class="p-2 text-center border-b-2 border-b-gray-200">
                            {service.heading}
                        </td>
                        <td class="p-2 text-center border-b-2 border-b-gray-200">
                            {service.description}
                        </td>
                        <td class="bg-black  w-[20%] text-center">
                            <div class="flex  flex-row justify-around">
                                <button onclick={() => goto(`/admin/blog/${service.id}`)} class="text-white bg-blue-400 p-1">
                                    Редактировать
                                </button>
                                <button onclick={onDeleteBlog(service.id)} class="text-white bg-blue-400 p-1">
                                    Удалить
                                </button>
                            </div>
                        </td>
                    </tr>
                {/each}
                </tbody>
            </table>

            <button onclick={() => goto(`/admin/blog/`)} class="text-white bg-blue-400 p-1">
                Добавить
            </button>
        </section>
    </div>
</div>

<style>
    input {
        color: black;
    }
</style>
