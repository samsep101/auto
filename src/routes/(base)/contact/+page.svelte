<script>
    import Geo from '$lib/images/geo.png';
    import Time from '$lib/images/time.png';
    import Phone from '$lib/images/phone.png';

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

<form>
    <h6>Остались вопросы? Задайте их нам</h6>
    <input type="text" placeholder="Введите ваше имя">
    <input type="text" placeholder="Введите ваш email">
    <input type="texts" placeholder="Введите ваше сообщение">
    <button>Отправить</button>
</form>

