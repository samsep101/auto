<script>
    import {fetchReviews} from "$lib/api";

    let {data} = $props();

    let reviews = $state(data.reviews);


    const save = function() {
        const data = {
            name: this.name.value,
            text: this.text.value
        }

        fetch('/reviews', {
            method: 'POST',
            body: JSON.stringify(data)
        }).then(async () => {
            reviews = await fetchReviews()
        })
    }
</script>


<div class="container mx-auto m-5 flex flex-col gap-4">


    <form onsubmit={save} class="max-w-[600px] flex flex-col">
        <h6>Оставьте свой отзыв</h6>
        <input type="text" name="name" class="mb-5" placeholder="Введите ваше имя" />
        <textarea class="mb-5" name="text"  placeholder="Введите ваше сообщение"></textarea>
        <button class="p-2" type="submit">Отправить</button>
    </form>

    <section class="reviews container mx-auto">
        {#each reviews as review}
            <div class="flex border-blue-900 border-2 p-4 flex-col mb-5">
                <h4 class="text-xl mb-2">
                    {review.name}
                </h4>
                <p class="text-base">
                    {review.text}
                </p>
            </div>
        {/each}
    </section>
</div>

<style>
    aside {
        @apply flex flex-col

    }

    .tabs-head--item-active {
        @apply bg-blue-400
    }

    form button{
        display: block;
        margin-left: auto;
        margin-right: auto;
        color: white;
        background-color: #4A77BC;
        font-size: 20px;
        font-family: 'Noto Sans SC', sans-serif;
        font-weight: 400;
        border: navy;
        width: 70%;
        margin: 0 auto;
    }


    form input, textarea {
        width: 70%;
        margin: 0 auto;
        color: white;
        background-color: #4A77BC;
        font-size: 20px;
        font-family: 'Noto Sans SC', sans-serif;
        font-weight: 400;
        border: navy;
        @apply mb-5
    }
    ::placeholder {
        color: white;
        padding-left:68px;
    }
</style>