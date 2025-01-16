<script>
    const {children} = $props()
</script>

<tr class="bg-white text-black even:bg-gray-50 border-b-2 border-b-gray-200">
    {@render children()}
</tr>