<template>
    <div>
        
  <h2>Holaaa desde el componente Counter</h2>
  <button class="btn btn-danger" @click="disminuir">-</button>
        {{ contador }}
  <button class="btn btn-primary" @click="aumentar">+</button>
</div>
</template>

<script>
export default {
    name:'CounterComponent',
    data(){
        return{
            contador:0
        }
    },
    methods:{
        aumentar(){
            this.contador++;
        },
        disminuir(){
            this.contador--;
        }
    }
}
</script>

<style>

</style>