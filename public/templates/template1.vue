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

<style lang="scss" scoped>
    /*
     * Some styles so that our first component
     * looks somewhat special
    */
    .main-content {
        font-family: sans-serif;
        background-color: lighten(red,30%);
        padding: 10px;
        border-radius: 5px;
        max-width: 500px;
        h1 {
            font-size:16px;
            margin:0;
        }
        h3 {
            font-size:16px;
            font-weight:normal;
            margin:0;
        }
    }
</style>

