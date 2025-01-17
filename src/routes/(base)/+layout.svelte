
<script lang="ts">
	import Logo from '$lib/images/logo.png';
	import Gear from '$lib/images/gear.png'
	import NavigationLink from "$components/NavigationLink.svelte";
	import authStore from '$modules/auth/index.svelte';

	let {children} = $props();


	const isAdmin = $derived(authStore.isAuthorized)
</script>

<div class="wrapper">
	<header class="container mx-auto">
		<a href="">
			<img src={Logo} width="100px" />
		</a>
		<div class="nav">
			<ul>
				<NavigationLink path="/" name="Главная" />
				<NavigationLink path="/about" name="О нас" />
				<NavigationLink path="/services" name="Услуги" />
				<NavigationLink path="/blog" name="Блог" />
				<NavigationLink path="/reviews" name="Отзывы" />
				<NavigationLink path="/contact" name="Контакты" />
			</ul>
		</div>
		{#if isAdmin}
			<a href="/admin">
				<img src={Gear} width="25px">
			</a>
		{/if}
	</header>

	<main>
		{@render children()}
	</main>

	<footer>
		<div class="foot container mx-auto">
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
