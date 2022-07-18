<template>
  <div class="about">
    <h1>CONSULTAR DATOS DE FIREBASE</h1>
    <ul>
      <li v-for="elementos in productos">
          <span>{{ elementos.data.name }}</span> - <span> {{ elementos.data.stock}} </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { getFirestore, collection, onSnapshot, query } from 'firebase/firestore'
export default{
  name: 'ConsultarDatosView',
  data:()=>{
    return{
        productos:[],
    }
  },
  methods:{
    async getProducts(){
      console.log('llama a getProducts');
      const db=getFirestore();
      const q = query(collection(db, "productos"));
      onSnapshot(q, (querySnapshot)=>{
          const productos = [];
          this.productos = [];

          querySnapshot.forEach((doc)=>{
              productos.push({id: doc.id, data: doc.data() });
          });
          this.productos = productos;
      });
    }
  },
  mounted(){
      console.log('invoca mounted');
      this.getProducts();
  },
}
</script>
