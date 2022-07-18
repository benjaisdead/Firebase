<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <InsertarDatos msg="Formulario de Registro"/>
  </div>
</template>

<script>
// @ is an alias to /src
import InsertarDatos from '@/components/InsertarDatos.vue'

export default {
  name: 'HomeView',
  components: {
    InsertarDatos
  }
}
</script>
