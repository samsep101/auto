<script>
    import Diagnostic from '$lib/images/diagnostics.svg';
    import Repair from '$lib/images/repair.svg';
    import Tier from '$lib/images/tier.svg';
    import To from '$lib/images/to.svg';
    import Td from '$lib/images/td.svg';
    import {PUBLIC_BACKEND_URL} from "$env/static/public";

    const send = function(event) {

        event.preventDefault();

        const data = {
            name: this.name.value,
            description: this.description.value,
            phone: this.phone.value
        }

        fetch(PUBLIC_BACKEND_URL + '/send-order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

</script>


<home>
    <div class="text">
        <h1>Доверьте свой автомобиль профессионалам с многолетним опытом</h1>
        <h2>Высокое качество работ, индивидуальный подход к каждому клиенту</h2>
        <button>Заказать звонок</button>
    </div>
</home>

<catalog>
    <h2>Каталог</h2>
    <div class="image-container">
        <img src={Diagnostic} alt="Image 1">
        <img src={Repair} alt="Image 2">
        <img src={Tier} alt="Image 3">
        <img src={To} alt="Image 4">
        <img src={Td} alt="Image 5">
    </div>
</catalog>

<form onsubmit={send}>
    <h6>Заказать звонок</h6>
    <input type="text" name="name" placeholder="Введите ваше имя">
    <input type="text" name="phone" placeholder="Введите ваш номер телефона">
    <input type="text" name="description" placeholder="Опишите вашу проблему и укажите марку машины"/>
    <button type="submit">Отправить</button>
</form>


<style>
    form input:not(:last-of-type) {
        width: 524px;
        height: 42px;
        color: white;
        background-color: #4A77BC;
        font-size: 20px;
        font-family: 'Noto Sans SC', sans-serif;
        font-weight: 400;
        border: navy;
        margin-left: 48px;
    }

    ::placeholder {
        color: white;
        padding-left: 68px;
    }

    form input:last-of-type {

        width: 1103px;
        height: 94px;
        margin-top: 24px;
        margin-left: 48px;
        color: white;
        background-color: #4A77BC;
        font-size: 20px;
        font-family: 'Noto Sans SC', sans-serif;
        font-weight: 400;
        border: navy;
    }

    form button{
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 33px;
        width: 174px;
        height: 42px;
        color: white;
        background-color: #4A77BC;
        font-size: 20px;
        font-family: 'Noto Sans SC', sans-serif;
        font-weight: 400;
        border: navy;
    }
</style>