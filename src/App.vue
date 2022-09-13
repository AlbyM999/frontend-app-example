<template>
  <header style="">
      <nav style="display:flex; flex-direction:row">
        <RouterLink v-for="Link in Header.Pages" :key="Link.name" :to="Link.URL" style="margin:1rem">{{ Link.name }}</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>

</style>

<script>
  import { RouterLink, RouterView } from "vue-router";
  
  export default{
    components(){
      RouterLink,
      RouterView
    },
    data(){
      return{
        Header:{
          /*to make a new page in the header copy: 
          
            {
              name:'Page name',
              URL:'/your url'
            },
            
            and add this to the array of pages
            Dont forget to make a route in: \src\router\index.js
          */
          Pages:[
            {
              name:'Home',
              URL:'/'
            },
            {
              name:'About',
              URL:'/about'
            },
            {
              name:'Tickets',
              URL:'/tickets'
            },
            {
              name:'Employees',
              URL:'/employees'
            },
          ]
        }
      }
    }
  }
  </script>