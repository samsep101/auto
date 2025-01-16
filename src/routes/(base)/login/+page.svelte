<script lang="ts">
    import authStore from '$modules/auth/index.svelte.js';
    import {goto} from "$app/navigation";


    const onLogin = (event: SubmitEvent) => {
        event.preventDefault();

        const form: HTMLFormElement = event.target as HTMLFormElement;

        let email = form['email'].value;
        let password = form['password'].value;

        let body = {
            email,
            password,
        };

        authStore.doLogin(body).then(() => {
            goto('/');
        });
    }

</script>


<svelte:head>
    <title>About</title>
    <meta name="description" content="About this app"/>
</svelte:head>

<div>
    <form class="container card form" id="login-form" action="/login" method="post" onsubmit={onLogin}>
        <h2 id="auth">Авторизация </h2>


        <input type="email" placeholder="Введите ваш E-mail:" id="email" name="email" required>
        <input type="password" placeholder="Введите ваш пароль:" id="password" name="password" required>

        <button type="submit" id="a">Войти</button>
    </form>

</div>



