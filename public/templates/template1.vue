<template>
    <div class="main-content">
        <h1> This is a template component...</h1>
        <h3> {{ webpack }}</h3>
    </div>
</template>

<script>
    export default {
        name: "main-content",
        data: () => ({
            // reactive data property of the component.
            webpack: 'Yesterday, all my troubles seem so far away...',
        }),
    }
</script>

<style scoped>
    /*
     * Some styles so that our first component
     * looks somewhat special
    */
    .main-content {
        font-family: sans-serif;
        background-color: red;
        padding: 10px;
        border-radius: 5px;
        max-width: 500px;
    }
</style>

