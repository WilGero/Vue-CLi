<template>
  <h2>Es el post:{{ $route.params.post }} del usuario:{{ $route.params.user }} </h2>
</template>

<script>
    export default {
    mounted(){
        console.log(this.$route.params);
    }
    }
</script>

<style>

</style>