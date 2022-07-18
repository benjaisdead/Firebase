<template>
  <div class="hello">
    <h1>{{ msg }}</h1>


<b-container>
    <template>
      <div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group
            id="input-group-1"
            label="Nombre:"
            label-for="input-1"
            description="Ingrese nombre del producto"
          >
            <b-form-input
              id="input-1"
              v-model="producto.name"
              type="text"
              placeholder="Ingrese nombre"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Precio:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="producto.precio"
              type="number"
              placeholder="Ingrese precio"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-3" label="Stock:" label-for="input-3">
            <b-form-select
              id="input-3"
              v-model="producto.stock"
              :options="elstock"
              required
            ></b-form-select>
          </b-form-group>


          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
        <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0">{{ producto }}</pre>
        </b-card>
      </div>
    </template>
</b-container>





  </div>
</template>

<script>
import { getFirestore, collection, addDoc } from "firebase/firestore"
  export default {
    name:'InsertarDatos',
    props:{
      msg: String,
    },
    data() {
      return {
        elstock: [{ text: 'Seleccione Uno', value: null }, '5', '10', '20', '50'],
        show: true,
        producto:{
              name: '',
              precio: null,
              stock: null,
        },
      }
    },
    methods: {
      async onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.producto));
        const db = getFirestore();
        const { producto } = this;
        await addDoc(collection(db,"productos"), producto );
        console.log('Producto almacenado exitosamente');
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.producto.name = ''
        this.producto.precio = null
        this.producto.stock = null
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
