<script lang="ts">
    import {page} from "$app/state";

    interface Props {
        path: string;
        name: string
    }

    let { path, name }: Props = $props();
</script>

<li aria-current={page.url.pathname === path ? 'page' : undefined } class="navbar__navigation-li">
    <a class="navbar__navigation-li--a" href={path} >{name}</a>
</li>

<style>
    li[aria-current='page'] {
        border-bottom: 1px solid var(--color-jellow);
    }

    a:hover {
        text-decoration: none;
        /*color: var(--color-jellow);*/
    }
</style>
