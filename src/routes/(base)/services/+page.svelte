<script>

    const {data} = $props();

    let services = data.services;

</script>
<div class="container mx-auto mt-4">
    <table class="table-auto w-full">
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
            <tr class="bg-white text-black even:bg-gray-50 border-b-2 border-b-gray-200">
                <td class="p-2 text-center">
                    {service.name}
                </td>
                <td class="p-2 text-center">
                    {service.description}
                </td>
                <td class="p-2 text-center">
                    {service.price}
                </td>
            </tr>
        {/each}
        </tbody>

    </table>
</div>