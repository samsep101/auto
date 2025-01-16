<script>
    import Diagnostic from '$lib/images/diagnostics.svg';
    import Repair from '$lib/images/repair.svg';
    import Tier from '$lib/images/tier.svg';
    import To from '$lib/images/to.svg';
    import Td from '$lib/images/td.svg';

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

<form>
    <h6>Заказать звонок</h6>
    <input type="text" placeholder="Введите ваше имя">
    <input type="text" placeholder="Введите ваш номер телефона">
    <input type="texts" placeholder="Опишите вашу проблему и укажите марку машины">
    <button>Отправить</button>

</form>

