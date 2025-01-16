<script>
    import Geo from '$lib/images/geo.png';
    import Time from '$lib/images/time.png';
    import Phone from '$lib/images/phone.png';
    import {PUBLIC_BACKEND_URL} from "$env/static/public";



    const send = function() {
        const data = {
            name: this.name.value,
            questions: this.question.value,
            email: this.email.value
        }
        fetch(PUBLIC_BACKEND_URL + '/send-question', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

</script>
<div class="map">
    <h3>Шоссейная 5 корпус 1</h3>
    <div style="position:relative;overflow:hidden;"><a
            href="https://yandex.ru/maps/48/orenburg/?utm_medium=mapframe&utm_source=maps"
            style="color:#eee;font-size:12px;position:absolute;top:0px;">Оренбург</a><a
            href="https://yandex.ru/maps/48/orenburg/house/shosseynaya_ulitsa_5k1/YUwYdwZnSUcDQFtrfXRyd39gbQ==/?ll=55.117024%2C51.836339&utm_medium=mapframe&utm_source=maps&z=16.71"
            style="color:#eee;font-size:12px;position:absolute;top:14px;">Шоссейная улица, 5к1 — Яндекс Карты</a>
        <iframe src="https://yandex.ru/map-widget/v1/?ll=55.117024%2C51.836339&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgk3Njk0NjI5NjUSQ9Cg0L7RgdGB0LjRjywg0J7RgNC10L3QsdGD0YDQsywg0KjQvtGB0YHQtdC50L3QsNGPINGD0LvQuNGG0LAsIDXQujEiCg3Ud1xCFWpYT0I%2C&z=16.71"
                width="1200" height="409" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe>
    </div>
</div>

<div class="info">
    <div class="geo">
        <img src={Geo}>
        <div class="tx">
            <p>Россия, Оренбург</p>
            <p>Шоссейная 5 к. 1</p>
        </div>
    </div>
    <div class="time">
        <img src={Time}>
        <div class="tx">
            <p>Пн-пт с 10 до 20</p>
            <p>Сб с 10 до 18</p>
        </div>
    </div>
    <div class="phone">
        <img src={Phone}>
        <div class="tx">
            <p>+79123424073</p>
            <p>+79738488290</p>
        </div>
    </div>
</div>

<form onsubmit={send}>
    <h6>Остались вопросы? Задайте их нам</h6>
    <input type="text" name="name" placeholder="Введите ваше имя">
    <input type="text" name="email" placeholder="Введите ваш email">
    <input type="text" name="question" placeholder="Введите ваше сообщение">
    <button type="submit">Отправить</button>
</form>

<style>
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
    form input:not(:last-of-type){
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
        padding-left:68px;
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
</style>
