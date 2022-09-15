<template>
  <main>
    <TableComponent :Admin="true" :TableData="Users" :TableHeader="Header" :TableName="'Users'" @Update="update($event)" @DeleteRow="deleteRow($event)"></TableComponent>

    <div>
      <input type="text" v-model="form.naam" />
      <input type="text" v-model="form.omschrijving" />
      <input type="number" v-model="form.vergoeding" />
      <input type="number" v-model="form.gewicht" />
      <input type="number" v-model="form.onderdelen" />
      <button @click="post()">send</button>
    </div>
  </main>
</template>
<script>



import TableComponent from '../components/TableComponent.vue'

import CRUDmatches from '../crud/CRUDmatches'

export default {
    data(){
      return{
        Users:[
          {
            id:0,
            name:'joe',
            password:'jfjfjdj'
          }
        ],
        form:{
          naam:"",
          omschrijving:"",
          vergoeding:0,
          gewicht:0,
          onderdelen:0
        },
        Header:[
          'naam',
          'omschrijving',
          'id'
        ]
      }
    },
    setup() {
    },
    methods: {
        update(id) {
          CRUDmatches.update(id,{
            "naam":this.form.naam,
            "omschrijving":this.form.omschrijving,
            "vergoeding":this.form.vergoeding,
            "gewicht":this.form.gewicht,
            "onderdelen":this.form.onderdelen,
          })
        },
        deleteRow(id) {
          console.log(`delete ${id}`)
          CRUDmatches.delete(id)
        },
        async getUser(){
          this.Users = await CRUDmatches.get()
        },
        post(){
          CRUDmatches.create({
            "naam":this.form.naam,
            "omschrijving":this.form.omschrijving,
            "vergoeding":this.form.vergoeding,
            "gewicht":this.form.gewicht,
            "onderdelen":this.form.onderdelen,
          })
        }
    },
    components: { TableComponent },
    mounted(){
      this.getUser()
    }
}

</script>
