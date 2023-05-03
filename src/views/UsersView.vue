<template>
    <div v-if='userId'>
        <h2>Aqui podras ver el detalle de un usuario {{userId}}
</h2>
    </div>
    <div v-else>
        <h2>Aqui podras ver la lista de un usuarios</h2>
    </div>
    <nav>
    <router-link :to="{name:'userIndex',params:{userId:userId}}">Index</router-link> |
    <router-link :to="{name:'userProfile',params:{userId:userId}}">Profile</router-link> |
    <router-link :to="{name:'userCourses',params:{userId:userId}}">Cursos</router-link>
  </nav>
  <router-view/>
</template>

<script>
    export default{
        props:['userId']
    }
</script>

<style>
</style>