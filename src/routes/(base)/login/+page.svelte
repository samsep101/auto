<script lang="ts">
    import authStore from '$modules/auth/index.svelte';
    import {goto} from "$app/navigation";


    const onLogin = (event: SubmitEvent) => {
        event.preventDefault();

        const form: HTMLFormElement = event.target as HTMLFormElement;

        let login = form['login'].value;
        let password = form['password'].value;

        let body = {
            login,
            password,
        };

        authStore.doLogin(body).then(() => {
            goto('/admin');
        });
    }

</script>


<svelte:head>
    <title>About</title>
    <meta name="description" content="About this app"/>
</svelte:head>

<div>
    <form class="container mx-auto card form" id="login-form" action="/login" method="post" onsubmit={onLogin}>
        <h2 id="auth" class="mb-5">Авторизация </h2>

        <div class="mx-auto w-[80%] flex flex-col">
            <input type="text" placeholder="Введите ваш login:" id="login" name="login" required>
            <input type="password" placeholder="Введите ваш пароль:" id="password" name="password" required>

            <button type="submit" id="a">Войти</button>
        </div>
    </form>

</div>

<style>

    form button{
        color: white;
        background-color: #4A77BC;
        font-size: 20px;
        font-family: 'Noto Sans SC', sans-serif;
        font-weight: 400;
        border: navy;
        @apply p-2
    }


    form input, textarea {
        color: white;
        background-color: #4A77BC;
        font-size: 20px;
        font-family: 'Noto Sans SC', sans-serif;
        font-weight: 400;
        border: navy;
        @apply mb-5 p-2
    }
    ::placeholder {
        color: white;
        padding-left:68px;
    }
</style>



