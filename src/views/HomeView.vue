<template>
  <main>
    <TableComponent :Admin="true" :TableData="Users" :TableHeader="Header" :TableName="'Users'" @Update="update($event)" @DeleteRow="deleteRow($event)"></TableComponent>
  </main>
</template>
<script>



import TableComponent from '../components/TableComponent.vue'

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
        Header:[
          'name',
          'password'
        ]
      }
    },
    setup() {
    },
    methods: {
        update(id) {
            console.log(`update ${id}`)
        },
        deleteRow(id) {
          console.log(`delete ${id}`)
        }
    },
    components: { TableComponent }
}

</script>
