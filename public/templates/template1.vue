<template>
    <div class="main-content">
        <h2> This is a template component...</h2>
        <h3> {{ webpack }}</h3>
    </div>
</template>

<script>
    export default {
        name: "main-content",
        data: () => ({
            // reactive data property of the component.
            webpack: 'This is the template content',
        }),
    }
</script>

<style lang="scss" scoped>

    @import "../../scss/_variables.scss";
    /*
     * Some styles so that our first component
     * looks somewhat special
    */
    .main-content {
        font-family: sans-serif;
        background-color: lighten(red,30%);
        padding: (10/$base-font-size)*1rem;
        border-radius: (5/$base-font-size)*1rem;
        max-width: (1024/$base-font-size)*1rem;
        h2 {
            font-size:(16/$base-font-size)*1rem;
            margin:0;
        }
        h3 {
            font-size:(16/$base-font-size)*1rem;
            font-weight:normal;
            margin:0;
        }
    }
</style>

