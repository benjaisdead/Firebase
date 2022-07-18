import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-1stOtFlycgqDcp0fP09xDMp9T2bdDA0",
  authDomain: "prueba2-50ae8.firebaseapp.com",
  projectId: "prueba2-50ae8",
  storageBucket: "prueba2-50ae8.appspot.com",
  messagingSenderId: "19212975736",
  appId: "1:19212975736:web:2a961ff5c840b672f1b78d",
  measurementId: "G-RWG139H71Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
