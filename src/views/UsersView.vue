<template>
    <div v-if='$route.params.userId'>
        <h2>Aqui podras ver el detalle de un usuario
</h2>
    </div>
    <div v-else>
        <h2>Aqui podras ver la lista de un usuarios</h2>
    </div>
    <nav>
    <router-link :to="{name:'userIndex',params:{'userId':$route.params.userId}}">Index</router-link> |
    <router-link :to="{name:'userProfile',params:{'userId':$route.params.userId}}">Cursos</router-link> |
    <router-link :to="{name:'userCourses',params:{'userId':$route.params.userId}}">Profile</router-link>
  </nav>
  <router-view/>
</template>