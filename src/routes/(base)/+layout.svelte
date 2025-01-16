
<script lang="ts">
	import Logo from '$lib/images/logo.png';
	import Gear from '$lib/images/gear.png'
	import NavigationLink from "$components/NavigationLink.svelte";

	let {children} = $props();

</script>

<div class="wrapper">
	<header class="container mx-auto">
		<a href="">
			<img src={Logo} />
		</a>
		<div class="nav">
			<ul>
				<NavigationLink path="/" name="Главная" />
				<NavigationLink path="/about" name="О нас" />
				<NavigationLink path="/services" name="Услуги" />
				<NavigationLink path="/blog" name="Блог" />
				<NavigationLink path="/feeds" name="Отзывы" />
				<NavigationLink path="/contact" name="Контакты" />
			</ul>
		</div>
		<a href="/admin">
			<img src={Gear}>
		</a>
	</header>

	<main>
		{@render children()}
	</main>

	<footer>
		<div class="foot">
			<div class="logos">
				<img src={Logo}>
				<p>Автомастерская ТехноАвто предлагает высококачественные услуги по ремонту и техническому обслуживанию автомобилей. </p>
			</div>
			<div class="navigation">
				<ul>
					<NavigationLink path="/" name="Главная" />
					<NavigationLink path="/about" name="О нас" />
					<NavigationLink path="/services" name="Услуги" />
					<NavigationLink path="/blog" name="Блог" />
					<NavigationLink path="/feeds" name="Отзывы" />
					<NavigationLink path="/contact" name="Контакты" />
				</ul>
			</div>
			<div class="contact">
				<p>г.Оренбург Шоссейная 5 к. 1</p>
				<p>Телефон: 89123424073</p>
				<p>TechoAvto@gmail.com</p>
			</div>
			<div class="pay">
				<p>Способы оплаты услуг:</p>
				<p>наличные</p>
				<p>оплата картой</p>
			</div>
		</div>
	</footer>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1 1 auto;
	}

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 18px;
	}
</style>
