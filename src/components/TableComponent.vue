<template>
    <table style="background-color: #8458B3; padding: 0.5rem; border-radius: 0.5rem;;">
        <th style="background-color:#D0BDF3; color: #E5EBF4; padding: 0.4rem; font-size: 1.3rem;">{{ TableName }}</th>
        <tr>
            <th  v-for="Header in TableHeader" :key="Header" style="background-color:#A0D2EB; color: #E5EBF4; padding: 0.4rem; font-size: 1.3rem;">{{ Header }}</th>
        </tr>
        <tr v-for="Collum in TableData" :key="Collum.id" >
            <td v-for="Header in TableHeader" :key="Header" style="background-color:#D0BDF3; color: #E5EBF4; padding: 0.4rem; font-size: 1.3rem;">{{ Collum[Header] }}</td>
            <button v-if="Admin" @click="update(Collum.id)" style="background-color:green; color: #E5EBF4; padding: 0.4rem; font-size: 1.3rem;">update</button>
            <button v-if="Admin" @click="deleteRow(Collum.id)" style="background-color:red; color: #E5EBF4; padding: 0.4rem; font-size: 1.3rem;">delete</button>
        </tr>
    </table>
</template>
<script>

export default{
    props: {
        TableName:{
            type:String,
            default:'Table Name',
            required:false
        },
        TableData: Object,
        TableHeader: Array,
        Admin: Boolean
    },
    setup() {
        
    },
    methods: {
        update(id){
            this.$emit('Update',id)
        },
        deleteRow(id){
            this.$emit('DeleteRow',id)
        }
    },
}
</script>
